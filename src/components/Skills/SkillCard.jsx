import { memo } from 'react'
import PropTypes from 'prop-types'
import { getIcon } from '../../utils/iconMapper'

const SkillCard = memo(({ skill }) => {
  const IconComponent = getIcon(skill.icon)
  
  return (
    <a 
      href={skill.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="skill-card"
      aria-label={`Learn more about ${skill.name}`}
    >
      <div className="skill-icon">
        <IconComponent />
      </div>
      <div className="skill-info">
        <h4>{skill.name}</h4>
        <span className="skill-learn-more">Learn More →</span>
      </div>
    </a>
  )
})

SkillCard.displayName = 'SkillCard'

SkillCard.propTypes = {
  skill: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

export default SkillCard
