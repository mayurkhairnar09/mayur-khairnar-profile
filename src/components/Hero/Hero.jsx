import { useMemo, memo } from 'react'
import SocialLinks from '../common/SocialLinks'
import LoadingState from '../common/LoadingState'
import ErrorState from '../common/ErrorState'
import { usePersonalData } from '../../hooks/usePublicData'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Hero.css'

// Memoized sub-components
const HeroIllustration = memo(() => (
  <div className="developer-illustration">
    <div className="code-editor">
      <div className="editor-header">
        <span className="dot dot-red"></span>
        <span className="dot dot-yellow"></span>
        <span className="dot dot-green"></span>
      </div>
      <div className="editor-content">
        <div className="code-line">
          <span className="keyword">const</span> <span className="variable">developer</span> = <span className="bracket">{'{'}</span>
        </div>
        <div className="code-line indent">
          <span className="property">name:</span> <span className="string">'Mayur'</span>,
        </div>
        <div className="code-line indent">
          <span className="property">role:</span> <span className="string">'Full-Stack'</span>,
        </div>
        <div className="code-line indent">
          <span className="property">skills:</span> <span className="bracket">['React', 'Node']</span>,
        </div>
        <div className="code-line">
          <span className="bracket">{'}'}</span>
        </div>
      </div>
    </div>
    <div className="floating-icons">
      <div className="float-icon icon-1">{'<>'}</div>
      <div className="float-icon icon-2">{'{}'}</div>
      <div className="float-icon icon-3">{'</>'}</div>
      <div className="float-icon icon-4">{'()'}</div>
    </div>
  </div>
))

HeroIllustration.displayName = 'HeroIllustration'

const Hero = () => {
  const { data, loading, error, refetch } = usePersonalData()
  const personalInfo = useMemo(() => data || {}, [data])
  const { name = '', title = '', location = '', summary = {} } = personalInfo
  const { yearsOfExperience = '', expertise = [], achievements = {} } = summary

  // Optimized animations - shared config for all hero elements
  const baseConfig = useMemo(() => ({ initiallyVisible: true }), [])
  const greetingAnim = useScrollAnimation({ ...baseConfig, direction: 'left', delay: 0 })
  const nameAnim = useScrollAnimation({ ...baseConfig, direction: 'left', delay: 100 })
  const titleAnim = useScrollAnimation({ ...baseConfig, direction: 'left', delay: 200 })
  const descAnim = useScrollAnimation({ ...baseConfig, direction: 'left', delay: 300 })
  const buttonsAnim = useScrollAnimation({ ...baseConfig, direction: 'up', delay: 400 })
  const socialAnim = useScrollAnimation({ ...baseConfig, direction: 'up', delay: 500 })
  const imageAnim = useScrollAnimation({ ...baseConfig, direction: 'right', delay: 200 })

  // Hero-specific loading/error handling (no title needed)
  if (loading) {
    return (
      <section id="hero" className="hero">
        <div className="container hero-container">
          <LoadingState message="Loading profile..." minHeight="400px" />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="hero" className="hero">
        <div className="container hero-container">
          <ErrorState
            message="Unable to load profile data. Please try again."
            onRetry={refetch}
            minHeight="400px"
          />
        </div>
      </section>
    )
  }

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Greeting text - slides in from left */}
          <p ref={greetingAnim.ref} className={`hero-greeting ${greetingAnim.className}`} style={greetingAnim.style}>
            Hello, I'm
          </p>
          
          {/* Name - slides in from left with slight delay */}
          <h1 ref={nameAnim.ref} className={`hero-name ${nameAnim.className}`} style={nameAnim.style}>
            {name}
          </h1>
          
          {/* Title - slides in from left */}
          <h2 ref={titleAnim.ref} className={`hero-title ${titleAnim.className}`} style={titleAnim.style}>
            {title}
          </h2>
          
          {/* Description paragraph - slides in from left */}
          <p ref={descAnim.ref} className={`hero-description ${descAnim.className}`} style={descAnim.style}>
            Based in {location}. {title} with {yearsOfExperience} years of experience
            building scalable, high-performance web applications using {expertise.join(', ')}.
            Improved frontend performance by {achievements.performanceImprovement} and reduced backend latency by {achievements.latencyReduction}. Microsoft Azure Certified.
          </p>
          
          {/* Action buttons - slide up from bottom */}
          <div ref={buttonsAnim.ref} className={`hero-buttons ${buttonsAnim.className}`} style={buttonsAnim.style}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
          
          {/* Social links - slide up from bottom */}
          <div ref={socialAnim.ref} className={socialAnim.className} style={socialAnim.style}>
            <SocialLinks className="hero-social" showLabels={true} />
          </div>
        </div>
        
        {/* Hero image/illustration - slides in from right */}
        <div ref={imageAnim.ref} className={`hero-image ${imageAnim.className}`} style={imageAnim.style}>
          <div className="hero-image-wrapper">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero