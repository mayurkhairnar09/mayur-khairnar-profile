import { memo } from 'react'
import PropTypes from 'prop-types'
import SkillCard from './SkillCard'

const SkillCategory = memo(({ category }) => (
  <div className="skill-category">
    <h3 className="category-title">{category.category}</h3>
    <div className="skills-grid">
      {category.skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  </div>
))

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
}

export default SkillCategory
