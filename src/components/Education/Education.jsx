import { FaGraduationCap, FaAward } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering - Electrical Engineering',
      institution: "SSBT's College of Engineering & Technology, Bambhori",
      location: 'Jalgaon, Maharashtra',
      period: '2015 - 2020',
      gpa: '',
      achievements: [
        'Graduated in Electrical Engineering with strong foundation in technical problem-solving',
        'Transitioned to software development, leveraging analytical and technical skills',
        'Developed passion for web development and full-stack technologies',
      ]
    }
  ]

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      year: '2024',
      link: 'https://learn.microsoft.com/en-in/users/mayurkhairnar-6087/credentials/19164cac4fb66ec9'
    },
    {
      name: 'React.JS Developer',
      issuer: 'LinkedIn Learning',
      year: '2024',
      link: ''
    },
    {
      name: 'Learning React.js',
      issuer: 'LinkedIn Learning',
      year: '2024',
      link: ''
    },
    {
      name: 'Learning ECMAScript 6+ (ES6+)',
      issuer: 'LinkedIn Learning',
      year: '2024',
      link: ''
    },
    {
      name: 'Copilot in Outlook: Maximize Your Workday Efficiency',
      issuer: 'Microsoft',
      year: '2024',
      link: ''
    }
  ]

  const awards = [
    {
      name: 'Cynclified Hackathon 2024',
      description: 'Secured 3rd place at the Hackathon Cyncly Pune',
      organization: 'Cyncly',
      year: '2024'
    },
    {
      name: 'Hackathon 2022',
      description: 'Secured 3rd place at the Hackathon',
      organization: 'TwentyTwenty Interior Design Software Pvt Ltd',
      year: '2022'
    }
  ]

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-content">
          <div className="education-section">
            <h3 className="subsection-title">
              <FaGraduationCap /> Education
            </h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-header">
                    <div>
                      <h4>{edu.degree}</h4>
                      <h5>{edu.institution}</h5>
                    </div>
                    <div className="education-meta">
                      <span className="education-period">{edu.period}</span>
                      {edu.gpa && <span className="education-gpa">GPA: {edu.gpa}</span>}
                      <span className="education-location">{edu.location}</span>
                    </div>
                  </div>
                  <ul className="education-achievements">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="subsection-title">
              <FaAward /> Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">
                    <FaAward />
                  </div>
                  <div className="cert-content">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="subsection-title">
              <FaAward /> Awards & Recognition
            </h3>
            <div className="certifications-grid">
              {awards.map((award, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">
                    <FaAward />
                  </div>
                  <div className="cert-content">
                    <h4>{award.name}</h4>
                    <p>{award.description}</p>
                    <p className="award-org">{award.organization}</p>
                    <span className="cert-year">{award.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
