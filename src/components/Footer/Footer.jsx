import { useMemo } from 'react'
import { FaHeart, FaHome, FaUser, FaBriefcase, FaCode, FaProjectDiagram, FaGraduationCap, FaEnvelope } from 'react-icons/fa'
import LoadingState from '../common/LoadingState'
import ErrorState from '../common/ErrorState'
import SocialLinks from '../common/SocialLinks'
import { usePersonalData } from '../../hooks/usePublicData'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { data, loading, error, refetch } = usePersonalData()
  const personalInfo = useMemo(() => data || {}, [data])
  const { name = 'Developer', title = '', summary = {} } = personalInfo
  const { 
    yearsOfExperience = '', 
    expertise = [], 
    achievements = {} 
  } = summary

  if (loading) {
    return (
      <footer className="footer">
        <div className="container">
          <LoadingState message="Loading footer content..." />
        </div>
      </footer>
    )
  }

  if (error) {
    return (
      <footer className="footer">
        <div className="container">
          <ErrorState 
            message="Unable to load footer content." 
            onRetry={refetch}
          />
        </div>
      </footer>
    )
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{name}</h3>
            <p>
              {title && yearsOfExperience && (
                <>
                  {title} with {yearsOfExperience} years of experience
                  {expertise.length > 0 && ` in ${expertise.join(', ')}`}.
                  {achievements.performanceImprovement && (
                    <> Improved frontend performance by {achievements.performanceImprovement}</>
                  )}
                  {achievements.latencyReduction && (
                    <> and reduced backend latency by {achievements.latencyReduction}</>
                  )}.
                  {' '}Microsoft Azure Certified.
                </>
              )}
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero" aria-label="Navigate to Home"><FaHome /> Home</a></li>
              <li><a href="#about" aria-label="Navigate to About"><FaUser /> About</a></li>
              <li><a href="#experience" aria-label="Navigate to Experience"><FaBriefcase /> Experience</a></li>
              <li><a href="#skills" aria-label="Navigate to Skills"><FaCode /> Skills</a></li>
              <li><a href="#projects" aria-label="Navigate to Projects"><FaProjectDiagram /> Projects</a></li>
              <li><a href="#education" aria-label="Navigate to Education"><FaGraduationCap /> Education</a></li>
              <li><a href="#contact" aria-label="Navigate to Contact"><FaEnvelope /> Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <SocialLinks className="footer-social" showLabels={true} />
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {name}. All rights reserved.
          </p>
          <p className="footer-credit">
            Made with <FaHeart className="heart-icon" aria-label="love" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
