import { memo } from 'react'
import PropTypes from 'prop-types'
import SkillCard from './SkillCard'

/**
 * Displays a category of skills (like "Frontend", "Backend", etc.)
 */
const SkillCategory = memo(({ category, index = 0 }) => {
  return (
    <div className="skill-category">
      <h3 className="category-title">{category.category}</h3>
      <div className="skills-grid">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard 
            key={skill.id} 
            skill={skill} 
            delay={skillIndex * 50} 
          />
        ))}
      </div>
    </div>
  )
})

SkillCategory.displayName = 'SkillCategory'

SkillCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        icon: PropTypes.string,
        level: PropTypes.string
      })
    ).isRequired,
  }).isRequired,
  index: PropTypes.number,
}

export default SkillCategory