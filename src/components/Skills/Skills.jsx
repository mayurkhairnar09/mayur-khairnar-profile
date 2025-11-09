import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaCloud } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiPostgresql, SiDocker, SiTypescript, SiRedux, SiNextdotjs, SiMui } from 'react-icons/si'
import { memo, useMemo } from 'react'
import './Skills.css'

// Optimized data structure - moved outside component
const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    category: 'Frontend Technologies',
    skills: [
      { id: 'react', name: 'React.js', icon: FaReact },
      { id: 'redux', name: 'Redux', icon: SiRedux },
      { id: 'javascript', name: 'JavaScript (ES6+)', icon: FaJs },
      { id: 'typescript', name: 'TypeScript', icon: SiTypescript },
      { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs },
      { id: 'html5', name: 'HTML5', icon: FaHtml5 },
      { id: 'css3', name: 'CSS3', icon: FaCss3Alt },
      { id: 'materialui', name: 'Material UI', icon: SiMui },
    ]
  },
  {
    id: 'backend',
    category: 'Backend & APIs',
    skills: [
      { id: 'nodejs', name: 'Node.js', icon: FaNode },
      { id: 'expressjs', name: 'Express.js', icon: SiExpress },
      { id: 'restful', name: 'RESTful APIs', icon: FaDatabase },
      { id: 'microservices', name: 'Microservices', icon: FaNode },
      { id: 'azurefunctions', name: 'Azure Functions', icon: FaCloud },
    ]
  },
  {
    id: 'database',
    category: 'Database & Cloud',
    skills: [
      { id: 'mongodb', name: 'MongoDB', icon: SiMongodb },
      { id: 'sqlserver', name: 'SQL Server', icon: FaDatabase },
      { id: 'postgresql', name: 'PostgreSQL', icon: SiPostgresql },
      { id: 'azure', name: 'Azure Cloud', icon: FaCloud },
    ]
  },
  {
    id: 'devops',
    category: 'DevOps & Tools',
    skills: [
      { id: 'azuredevops', name: 'Azure DevOps', icon: FaCloud },
      { id: 'git', name: 'Git/GitHub', icon: FaGitAlt },
      { id: 'docker', name: 'Docker', icon: SiDocker },
      { id: 'cicd', name: 'CI/CD Pipelines', icon: FaCloud },
    ]
  }
]

// Memoized skill card component
const SkillCard = memo(({ skill }) => {
  const IconComponent = skill.icon
  
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <IconComponent />
      </div>
      <div className="skill-info">
        <h4>{skill.name}</h4>
      </div>
    </div>
  )
})

SkillCard.displayName = 'SkillCard'

// Memoized category component
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

const Skills = () => {
  // Memoize categories to prevent unnecessary recalculations
  const categories = useMemo(() => SKILL_CATEGORIES, [])

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
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
