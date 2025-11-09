import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiMicrosoftsqlserver, SiPostgresql, SiDocker, SiTypescript, SiRedux, SiNextdotjs, SiMaterialui, SiMicrosoftazure } from 'react-icons/si'
import { memo, useMemo } from 'react'
import './Skills.css'

// Optimized data structure - moved outside component
const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    category: 'Frontend Technologies',
    skills: [
      { id: 'react', name: 'React.js', icon: FaReact, level: 95 },
      { id: 'redux', name: 'Redux', icon: SiRedux, level: 90 },
      { id: 'javascript', name: 'JavaScript (ES6+)', icon: FaJs, level: 95 },
      { id: 'typescript', name: 'TypeScript', icon: SiTypescript, level: 88 },
      { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { id: 'html5', name: 'HTML5', icon: FaHtml5, level: 95 },
      { id: 'css3', name: 'CSS3', icon: FaCss3Alt, level: 95 },
      { id: 'materialui', name: 'Material UI', icon: SiMaterialui, level: 92 },
    ]
  },
  {
    id: 'backend',
    category: 'Backend & APIs',
    skills: [
      { id: 'nodejs', name: 'Node.js', icon: FaNode, level: 92 },
      { id: 'expressjs', name: 'Express.js', icon: SiExpress, level: 90 },
      { id: 'restful', name: 'RESTful APIs', icon: FaDatabase, level: 95 },
      { id: 'microservices', name: 'Microservices', icon: FaNode, level: 88 },
      { id: 'azurefunctions', name: 'Azure Functions', icon: SiMicrosoftazure, level: 90 },
    ]
  },
  {
    id: 'database',
    category: 'Database & Cloud',
    skills: [
      { id: 'mongodb', name: 'MongoDB', icon: SiMongodb, level: 88 },
      { id: 'sqlserver', name: 'SQL Server', icon: SiMicrosoftsqlserver, level: 85 },
      { id: 'postgresql', name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
      { id: 'azure', name: 'Azure Cloud', icon: SiMicrosoftazure, level: 90 },
    ]
  },
  {
    id: 'devops',
    category: 'DevOps & Tools',
    skills: [
      { id: 'azuredevops', name: 'Azure DevOps', icon: SiMicrosoftazure, level: 90 },
      { id: 'git', name: 'Git/GitHub', icon: FaGitAlt, level: 92 },
      { id: 'docker', name: 'Docker', icon: SiDocker, level: 80 },
      { id: 'cicd', name: 'CI/CD Pipelines', icon: SiMicrosoftazure, level: 88 },
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
        <div className="skill-bar">
          <div 
            className="skill-progress" 
            style={{ width: `${skill.level}%` }}
            role="progressbar"
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label={`${skill.name} proficiency: ${skill.level}%`}
          />
        </div>
        <span className="skill-percentage">{skill.level}%</span>
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
