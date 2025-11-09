import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      location: 'City, Country',
      period: 'Jan 2023 - Present',
      description: [
        'Led development of multiple full-stack web applications using MERN stack',
        'Implemented responsive UI components with React and modern CSS frameworks',
        'Designed and optimized RESTful APIs and database schemas',
        'Collaborated with cross-functional teams in agile environment',
        'Mentored junior developers and conducted code reviews',
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Another Tech Company',
      location: 'City, Country',
      period: 'Jun 2021 - Dec 2022',
      description: [
        'Developed and maintained web applications using React, Node.js, and MongoDB',
        'Improved application performance by 40% through code optimization',
        'Integrated third-party APIs and payment gateways',
        'Wrote unit tests and performed debugging to ensure code quality',
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      location: 'City, Country',
      period: 'Jan 2020 - May 2021',
      description: [
        'Assisted in building responsive web applications',
        'Participated in daily standups and sprint planning',
        'Fixed bugs and implemented new features based on requirements',
        'Learned best practices in modern web development',
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
