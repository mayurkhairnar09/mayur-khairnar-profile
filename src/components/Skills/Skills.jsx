import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiMicrosoftsqlserver, SiPostgresql, SiDocker, SiTypescript, SiRedux, SiNextdotjs, SiMaterialui, SiGraphql, SiJest, SiBootstrap, SiWebpack } from 'react-icons/si'
import { DiJqueryLogo } from 'react-icons/di'
import { SiMicrosoftazure } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Technologies',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 95 },
        { name: 'Redux', icon: <SiRedux />, level: 90 },
        { name: 'JavaScript (ES6+)', icon: <FaJs />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 88 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 95 },
        { name: 'Material UI', icon: <SiMaterialui />, level: 92 },
      ]
    },
    {
      category: 'Backend & APIs',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 92 },
        { name: 'Express.js', icon: <SiExpress />, level: 90 },
        { name: 'RESTful APIs', icon: <FaDatabase />, level: 95 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 85 },
      ]
    },
    {
      category: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 88 },
        { name: 'SQL Server', icon: <SiMicrosoftsqlserver />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
        { name: 'Azure Cloud', icon: <SiMicrosoftazure />, level: 90 },
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Azure DevOps', icon: <SiMicrosoftazure />, level: 90 },
        { name: 'Git/GitHub', icon: <FaGitAlt />, level: 92 },
        { name: 'Docker', icon: <SiDocker />, level: 80 },
        { name: 'CI/CD Pipelines', icon: <SiMicrosoftazure />, level: 88 },
      ]
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
