import { useMemo } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { usePersonalData } from '../../hooks/usePublicData'
import './SocialLinks.css'

// Icon mapping
const ICON_MAP = {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook
}

const SocialLinks = ({ className = '', showLabels = false }) => {
  const { data } = usePersonalData()
  const personalInfo = useMemo(() => data || {}, [data])
  const { social = [] } = personalInfo

  const SOCIAL_LINKS = useMemo(() => {
    return social
      .filter(link => link.href && link.href !== '#')
      .map(link => ({
        ...link,
        icon: ICON_MAP[link.icon] || FaEnvelope
      }))
  }, [social])

  if (SOCIAL_LINKS.length === 0) {
    return null
  }

  return (
    <div className={`social-links ${className}`}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.id}
            href={social.href}
            target={social.id !== 'email' ? '_blank' : undefined}
            rel={social.id !== 'email' ? 'noopener noreferrer' : undefined}
            aria-label={social.ariaLabel}
          >
            <Icon />
            {showLabels && <span className="social-label">{social.label}</span>}
          </a>
        )
      })}
    </div>
  )
}

SocialLinks.propTypes = {
    className: PropTypes.string,
    showLabels: PropTypes.bool
}

export default SocialLinks