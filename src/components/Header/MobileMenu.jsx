import React from 'react'
import PropTypes from 'prop-types'
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'

const MobileMenu = ({ isOpen, onToggle, navItems, onNavClick }) => {
  const iconMap = {
    'Home': <FaHome />,
    'About': <FaUser />,
    'Skills': <FaCode />,
    'Experience': <FaBriefcase />,
    'Education': <FaGraduationCap />,
    'Projects': <FaProjectDiagram />,
    'Contact': <FaEnvelope />,
  }

  return (
    <>
      <div className="nav-toggle" onClick={onToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <a href={item.href} className="nav-link" onClick={onNavClick}>
              <span className="nav-icon">{iconMap[item.name]}</span>
              <span className="nav-label">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div 
          className="nav-backdrop" 
          onClick={onToggle}
        />
      )}
    </>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
  onNavClick: PropTypes.func.isRequired,
}

export default MobileMenu
