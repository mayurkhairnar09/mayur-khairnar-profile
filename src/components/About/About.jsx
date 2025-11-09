import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import LoadingState from '../common/LoadingState'
import ErrorState from '../common/ErrorState'
import { usePersonalData } from '../../hooks/usePublicData'
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

  if (loading) {
    return (
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <LoadingState message="Loading about information..." />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <ErrorState
            message="Unable to load about information."
            onRetry={refetch}
          />
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
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
          <div className="about-stats">
            {stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
