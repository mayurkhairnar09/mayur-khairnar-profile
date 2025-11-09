import { useMemo, memo } from 'react'
import SocialLinks from '../common/SocialLinks'
import LoadingState from '../common/LoadingState'
import ErrorState from '../common/ErrorState'
import { usePersonalData } from '../../hooks/usePublicData'
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
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{name}</h1>
          <h2 className="hero-title">{title}</h2>
          <p className="hero-description">
            Based in {location}. {title} with {yearsOfExperience} years of experience
            building scalable, high-performance web applications using {expertise.join(', ')}.
            Improved frontend performance by {achievements.performanceImprovement} and reduced backend latency by {achievements.latencyReduction}. Microsoft Azure Certified.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
          <SocialLinks className="hero-social" showLabels={true} />
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero