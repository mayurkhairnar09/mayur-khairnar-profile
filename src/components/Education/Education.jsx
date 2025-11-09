import { FaGraduationCap, FaAward } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      period: '2016 - 2020',
      gpa: '3.8/4.0',
      achievements: [
        'Graduated with First Class Honors',
        'Won Best Project Award for final year project',
        'Active member of Coding Club and Tech Society',
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'School Name',
      location: 'City, Country',
      period: '2014 - 2016',
      gpa: '90%',
      achievements: [
        'Secured 90% in board examinations',
        'Participated in various coding competitions',
      ]
    }
  ]

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Coursera',
      year: '2023'
    },
    {
      name: 'React - The Complete Guide',
      issuer: 'Udemy',
      year: '2022'
    },
    {
      name: 'Node.js Developer Certification',
      issuer: 'MongoDB University',
      year: '2022'
    },
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2021'
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
                      <span className="education-gpa">GPA: {edu.gpa}</span>
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
