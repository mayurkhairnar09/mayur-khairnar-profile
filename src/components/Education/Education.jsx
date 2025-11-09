import { FaGraduationCap, FaAward, FaExternalLinkAlt } from 'react-icons/fa'
import { memo } from 'react'
import './Education.css'

// Optimized data structure with proper typing and organization
const EDUCATION_DATA = [
  {
    id: 'be-electrical',
    degree: 'Bachelor of Engineering - Electrical Engineering',
    institution: "SSBT's College of Engineering & Technology, Bambhori",
    location: 'Jalgaon, Maharashtra',
    period: '2015 - 2020',
    achievements: [
      'Graduated in Electrical Engineering with strong foundation in technical problem-solving',
      'Transitioned to software development, leveraging analytical and technical skills',
      'Developed passion for web development and full-stack technologies',
    ]
  }
]

const CERTIFICATIONS_DATA = [
  {
    id: 'azure-az900',
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: '2024',
    link: 'https://learn.microsoft.com/en-in/users/mayurkhairnar-6087/credentials/19164cac4fb66ec9?ref=https%3A%2F%2Fwww.linkedin.com%2F'
  },
  {
    id: 'react-oneroadmap',
    name: 'React Certification',
    issuer: 'OneRoadmap',
    year: '2024',
    link: 'https://oneroadmap.io/skills/react/certificate/CERT-EBE98FF5'
  },
  {
    id: 'react-developer',
    name: 'React.JS Developer',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: 'https://www.linkedin.com/learning/certificates/4b3f3de0fe1b92b48a1e6371bddb7238d1ecdf818d110d5313ca9429a11d74f6'
  },
  {
    id: 'learning-reactjs',
    name: 'Learning React.js',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: 'https://www.linkedin.com/learning/certificates/86b7a9da48b6ad94dfdf35a8e364344b4839f7aa65e611bc221a4a3fc4bc3cdb'
  },
  {
    id: 'es6-plus',
    name: 'Learning ECMAScript 6+ (ES6+)',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: 'https://www.linkedin.com/learning/certificates/1773a65e9c8652d46db3650a749a92d696cd98c3f1d4868fa554cd2fc38b359b'
  }
]

const AWARDS_DATA = [
  {
    id: 'hackathon-2024',
    name: 'Cynclified Hackathon 2024',
    description: 'Secured 3rd place at the Hackathon Cyncly Pune',
    organization: 'Cyncly',
    year: '2024'
  },
  {
    id: 'hackathon-2022',
    name: 'Hackathon 2022',
    description: 'Secured 3rd place at the Hackathon',
    organization: 'TwentyTwenty Interior Design Software Pvt Ltd',
    year: '2022'
  }
]

// Memoized sub-components for better performance
const EducationCard = memo(({ edu }) => (
  <div className="education-card">
    <div className="education-header">
      <div>
        <h4>{edu.degree}</h4>
        <h5>{edu.institution}</h5>
      </div>
      <div className="education-meta">
        <span className="education-period">{edu.period}</span>
        <span className="education-location">{edu.location}</span>
      </div>
    </div>
    <ul className="education-achievements">
      {edu.achievements.map((achievement, idx) => (
        <li key={idx}>{achievement}</li>
      ))}
    </ul>
  </div>
))

EducationCard.displayName = 'EducationCard'

const CertificationCard = memo(({ cert }) => (
  <div className="certification-card">
    <div className="cert-icon">
      <FaAward />
    </div>
    <div className="cert-content">
      <h4>{cert.name}</h4>
      <p>{cert.issuer}</p>
      <span className="cert-year">{cert.year}</span>
      {cert.link && (
        <a 
          href={cert.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cert-link"
          aria-label={`View ${cert.name} certificate`}
        >
          <FaExternalLinkAlt /> View Certificate
        </a>
      )}
    </div>
  </div>
))

CertificationCard.displayName = 'CertificationCard'

const AwardCard = memo(({ award }) => (
  <div className="certification-card">
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
))

AwardCard.displayName = 'AwardCard'

const Education = () => {

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-content">
          {/* Education Section */}
          <div className="education-section">
            <h3 className="subsection-title">
              <FaGraduationCap /> Education
            </h3>
            <div className="education-list">
              {EDUCATION_DATA.map((edu) => (
                <EducationCard key={edu.id} edu={edu} />
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="certifications-section">
            <h3 className="subsection-title">
              <FaAward /> Certifications
            </h3>
            <div className="certifications-grid">
              {CERTIFICATIONS_DATA.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="certifications-section">
            <h3 className="subsection-title">
              <FaAward /> Awards & Recognition
            </h3>
            <div className="certifications-grid">
              {AWARDS_DATA.map((award) => (
                <AwardCard key={award.id} award={award} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
