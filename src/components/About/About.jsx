import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../common/SectionWrapper'
import { usePersonalData } from '../../hooks/usePublicData'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './About.css'

// Memoized components for better performance
const InfoItem = memo(({ label, value }) => (
  <div className="info-item">
    <span className="info-label">{label}:</span>
    <span className="info-value">{value}</span>
  </div>
))

InfoItem.displayName = 'InfoItem'
InfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

const StatCard = memo(({ stat }) => (
  <div className="stat-card">
    <h3>{stat.value}</h3>
    <p>{stat.label}</p>
  </div>
))

StatCard.displayName = 'StatCard'
StatCard.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired
}

const About = () => {
  const { data, loading, error, refetch } = usePersonalData()
  const personalInfo = useMemo(() => data || {}, [data])
  const { name = '', email = '', location = '', status = '', bio = {}, stats = [] } = personalInfo

  // Setup animations for different sections
  const baseConfig = useMemo(() => ({ initiallyVisible: true }), [])
  const titleAnim = useScrollAnimation({ ...baseConfig, direction: 'up', delay: 0 })
  const textAnim = useScrollAnimation({ ...baseConfig, direction: 'left', delay: 100 })
  const statsAnim = useScrollAnimation({ ...baseConfig, direction: 'right', delay: 200 })

  return (
    <SectionWrapper
      id="about"
      className="about"
      title="About Me"
      loading={loading}
      error={error}
      onRetry={refetch}
      loadingMessage="Loading about information..."
      errorMessage="Unable to load about information."
    >
      {/* Section title with animation is handled by SectionWrapper, so we adjust */}
      <div className="about-content">
        {/* Text content - slides from left */}
        <div ref={textAnim.ref} className={`about-text ${textAnim.className}`} style={textAnim.style}>
          {bio.intro && <p>{bio.intro}</p>}
          {bio.current && <p>{bio.current}</p>}
          {bio.passion && <p>{bio.passion}</p>}
          <div className="about-info">
            <InfoItem label="Name" value={name} />
            <InfoItem label="Email" value={email} />
            <InfoItem label="Location" value={location} />
            <InfoItem label="Status" value={status} />
          </div>
        </div>
        
        {/* Stats cards - slide from right */}
        <div ref={statsAnim.ref} className={`about-stats ${statsAnim.className}`} style={statsAnim.style}>
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About