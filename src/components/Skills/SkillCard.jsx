import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './SkillCard.css'

const SkillCard = memo(({ skill }) => {
  const IconComponent = skill.icon
  
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
    icon: PropTypes.elementType.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

export default SkillCard
