import { useState, useCallback, memo } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

// Contact information - moved outside component for optimization
const CONTACT_INFO = {
  email: 'mayurkhairnar09@gmail.com',
  phone: '+917385564656',
  location: 'Pune, Maharashtra, India'
}

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

const Contact = () => {
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
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus('Message sent successfully!')
      setIsSubmitting(false)
      
      // Clear form and status
      setTimeout(() => setStatus(''), 3000)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }, [formData])

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
                content={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
                type="Email"
              />
              
              <ContactItem 
                icon={FaPhone}
                title="Phone"
                content={CONTACT_INFO.phone}
                href={`tel:${CONTACT_INFO.phone}`}
                type="Call"
              />
              
              <ContactItem 
                icon={FaMapMarkerAlt}
                title="Location"
                content={CONTACT_INFO.location}
                href={null}
                type={null}
              />
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
