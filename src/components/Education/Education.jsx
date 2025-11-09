import { FaGraduationCap, FaAward, FaExternalLinkAlt } from 'react-icons/fa'
import { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import LoadingState from '../common/LoadingState'
import ErrorState from '../common/ErrorState'
import { useEducationData } from '../../hooks/usePublicData'
import './Education.css'

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
        {edu.location && <span className="education-location">{edu.location}</span>}
      </div>
    </div>
    {edu.achievements?.length > 0 && (
      <ul className="education-achievements">
        {edu.achievements.map((achievement, idx) => (
          <li key={idx}>{achievement}</li>
        ))}
      </ul>
    )}
  </div>
))

EducationCard.displayName = 'EducationCard'
EducationCard.propTypes = {
  edu: PropTypes.shape({
    id: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    location: PropTypes.string,
    achievements: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

const CertificationCard = memo(({ cert }) => (
  <div className="certification-card">
    <div className="cert-icon">
      <FaAward />
    </div>
    <div className="cert-content">
      <h4>{cert.name}</h4>
      <p>{cert.issuer}</p>
      <div className="cert-meta">
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
        <span className="cert-year">{cert.year}</span>
      </div>
    </div>
  </div>
))

CertificationCard.displayName = 'CertificationCard'
CertificationCard.propTypes = {
  cert: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired
}

const AwardCard = memo(({ award }) => (
  <div className="certification-card">
    <div className="cert-icon">
      <FaAward />
    </div>
    <div className="cert-content">
      <h4>{award.name}</h4>
      <p>{award.description}</p>
      <p className="award-org">{award.organization}</p>
      <div className="cert-meta">
        <span className="cert-year">{award.year}</span>
      </div>
    </div>
  </div>
))

AwardCard.displayName = 'AwardCard'
AwardCard.propTypes = {
  award: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  }).isRequired
}

const Education = () => {
  const { data, loading, error, refetch } = useEducationData()
  const educationList = useMemo(() => data?.education || [], [data])
  const certificationsList = useMemo(() => data?.certifications || [], [data])
  const awardsList = useMemo(() => data?.awards || [], [data])

  if (loading) {
    return (
      <section id="education" className="section education">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          <LoadingState message="Loading education data..." />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="education" className="section education">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          <ErrorState
            message="Unable to load education data."
            onRetry={refetch}
          />
        </div>
      </section>
    )
  }

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="education-content">
          {/* Education Section */}
          {educationList.length > 0 && (
            <div className="education-section">
              <h3 className="subsection-title">
                <FaGraduationCap /> Education
              </h3>
              <div className="education-list">
                {educationList.map((edu) => (
                  <EducationCard key={edu.id} edu={edu} />
                ))}
              </div>
            </div>
          )}

          {/* Certifications Section */}
          {certificationsList.length > 0 && (
            <div className="certifications-section">
              <h3 className="subsection-title">
                <FaAward /> Certifications
              </h3>
              <div className="certifications-grid">
                {certificationsList.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            </div>
          )}

          {/* Awards Section */}
          {awardsList.length > 0 && (
            <div className="certifications-section">
              <h3 className="subsection-title">
                <FaAward /> Awards & Recognition
              </h3>
              <div className="certifications-grid">
                {awardsList.map((award) => (
                  <AwardCard key={award.id} award={award} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Education
