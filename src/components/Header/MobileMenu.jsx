import React from 'react'
import PropTypes from 'prop-types'
import { FaBars, FaTimes } from 'react-icons/fa'
import './MobileMenu.css'

const MobileMenu = ({ isOpen, onToggle, navItems, onNavClick }) => {
  return (
    <>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <a href={item.href} className="nav-link" onClick={onNavClick}>
              {item.name}
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

      <div className="nav-toggle" onClick={onToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
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
