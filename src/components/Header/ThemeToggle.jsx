import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FaMoon, FaSun, FaDesktop } from 'react-icons/fa'
import './ThemeToggle.css'

const ThemeToggle = ({ theme, onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const toggleTheme = () => {
    const currentIsDark = document.documentElement.classList.contains('dark-mode')
    onThemeChange(currentIsDark ? 'light' : 'dark')
  }

  const handleThemeSelect = (selectedTheme) => {
    onThemeChange(selectedTheme)
    setIsMenuOpen(false)
  }

  const getCurrentIcon = () => {
    if (theme === 'system') {
      const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return systemIsDark ? <FaMoon /> : <FaSun />
    }
    return theme === 'dark' ? <FaMoon /> : <FaSun />
  }

  return (
    <div className="theme-toggle-wrapper" ref={menuRef}>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        onMouseEnter={() => setIsMenuOpen(true)}
        aria-label="Toggle theme"
      >
        {getCurrentIcon()}
      </button>

      {isMenuOpen && (
        <div className="theme-menu">
          <button
            className={`theme-option ${theme === 'light' ? 'active' : ''}`}
            onClick={() => handleThemeSelect('light')}
          >
            <FaSun className="theme-icon" />
            <span>Light</span>
          </button>
          <button
            className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => handleThemeSelect('dark')}
          >
            <FaMoon className="theme-icon" />
            <span>Dark</span>
          </button>
          <button
            className={`theme-option ${theme === 'system' ? 'active' : ''}`}
            onClick={() => handleThemeSelect('system')}
          >
            <FaDesktop className="theme-icon" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  )
}

ThemeToggle.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark', 'system']).isRequired,
  onThemeChange: PropTypes.func.isRequired,
}

export default ThemeToggle