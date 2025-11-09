import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Cyncly',
      location: 'Pune, Maharashtra',
      period: 'Dec 2021 - Present',
      description: [
        'Delivered scalable UI features using React.js, Redux, and Material UI for a product used by 40+ clients, enhancing user satisfaction',
        'Reduced backend response time by 20% by developing optimized RESTful APIs using Node.js',
        'Achieved a 90% deployment success rate by managing Azure deployments and integrating Blob Storage',
        'Lowered post-release defects by conducting thorough API testing and validation with Postman',
        'Performed presales estimations for web applications, supporting accurate scoping and cost estimation that led to a 30% increase in proposal win rate',
        'Provide 24/7 production support: incident detection, triage, root-cause analysis, and rapid remediation of high-severity issues to minimize downtime',
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Twenty Twenty Interior Design Software Pvt Ltd',
      location: 'Pune, Maharashtra',
      period: 'Dec 2021 - May 2022',
      description: [
        'Built 20+ responsive web pages using HTML5, CSS3, Bootstrap, JavaScript, and React.js to ensure UI consistency and cross-device compatibility',
        'Integrated JSON data sources to enable dynamic rendering, reducing manual data handling and improving data reliability',
        'Developed interactive React applications that enhanced user engagement and improved page load times',
        'Participated in Agile development with Scrum methodologies, attending daily stand-ups and sprint planning to deliver iterative improvements',
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
