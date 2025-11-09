import React, { useMemo } from 'react'
import SectionTitle from '../common/SectionTitle'
import SkillCategory from './SkillCategory'
import { SKILL_CATEGORIES } from './skillsData'
import './Skills.css'

const Skills = () => {
  const categories = useMemo(() => SKILL_CATEGORIES, [])

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <div className="skills-container">
          {categories.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
