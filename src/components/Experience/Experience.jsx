import { FaBriefcase } from 'react-icons/fa'
import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import LoadingState from '../common/LoadingState'
import ErrorState from '../common/ErrorState'
import { useExperienceData } from '../../hooks/usePublicData'
import './Experience.css'

// Memoized experience item component
const ExperienceItem = memo(({ exp }) => (
  <div className="experience-item">
    <div className="experience-icon">
      <FaBriefcase />
    </div>
    <div className="experience-content">
      <div className="experience-header">
        <div>
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
        </div>
        <div className="experience-meta">
          <span className="experience-period">{exp.period}</span>
          <span className="experience-location">{exp.location}</span>
        </div>
      </div>
      <ul className="experience-description">
        {exp.description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
))

ExperienceItem.displayName = 'ExperienceItem'
ExperienceItem.propTypes = {
  exp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

const Experience = () => {
  const { data, loading, error, refetch } = useExperienceData()
  const experiences = useMemo(() => data?.experiences || [], [data])

  if (loading) {
    return (
      <section id="experience" className="section experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <LoadingState message="Loading experience data..." />
        </div>
      </section>
    )
  }

  if (error || experiences.length === 0) {
    return (
      <section id="experience" className="section experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <ErrorState
            message="Unable to load experience data."
            onRetry={refetch}
          />
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience