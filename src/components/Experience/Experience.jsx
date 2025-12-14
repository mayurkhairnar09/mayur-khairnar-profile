import { FaBriefcase } from 'react-icons/fa'
import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import SectionWrapper from '../common/SectionWrapper'
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

  return (
    <SectionWrapper
      id="experience"
      className="experience"
      title="Work Experience"
      loading={loading}
      error={error || experiences.length === 0}
      onRetry={refetch}
      loadingMessage="Loading experience data..."
      errorMessage="Unable to load experience data."
    >
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Experience