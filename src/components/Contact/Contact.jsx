import { useState, useCallback, memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import LoadingState from '../common/LoadingState'
import ErrorState from '../common/ErrorState'
import { usePersonalData } from '../../hooks/usePublicData'
import './Contact.css'

// Memoized contact item component
const ContactItem = memo(({ icon: Icon, title, content, href, type }) => (
  <div className="contact-item">
    <div className="contact-icon">
      <Icon />
    </div>
    <div>
      <h4>{title}</h4>
      {href ? (
        <a href={href} aria-label={`${type} ${content}`}>
          {content}
        </a>
      ) : (
        <p>{content}</p>
      )}
    </div>
  </div>
))

ContactItem.displayName = 'ContactItem'
ContactItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  href: PropTypes.string,
  type: PropTypes.string
}

const Contact = () => {
  const { data, loading, error, refetch } = usePersonalData()
  const personalInfo = useMemo(() => data || {}, [data])
  const { email = '', phone = '', location = '' } = personalInfo
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Optimized change handler with useCallback
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  // Optimized submit handler
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('Please fill in all required fields.')
      setIsSubmitting(false)
      setTimeout(() => setStatus(''), 3000)
      return
    }

    if (!emailRegex.test(formData.email)) {
      setStatus('Please enter a valid email address.')
      setIsSubmitting(false)
      setTimeout(() => setStatus(''), 3000)
      return
    }
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus('Message sent successfully!')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }, [formData])

  if (loading) {
    return (
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <LoadingState message="Loading contact information..." />
        </div>
      </section>
    )
  }

  if (error || !email) {
    return (
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <ErrorState 
            message="Unable to load contact information." 
            onRetry={refetch}
          />
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>Feel free to reach out through any of the following channels:</p>
            
            <div className="contact-details">
              <ContactItem 
                icon={FaEnvelope}
                title="Email"
                content={email}
                href={`mailto:${email}`}
                type="Email"
              />
              
              {phone && (
                <ContactItem 
                  icon={FaPhone}
                  title="Phone"
                  content={phone}
                  href={`tel:${phone}`}
                  type="Call"
                />
              )}
              
              {location && (
                <ContactItem 
                  icon={FaMapMarkerAlt}
                  title="Location"
                  content={location}
                  href={null}
                  type={null}
                />
              )}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
              aria-label="Send message"
            >
              <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p className="form-status" role="alert">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact