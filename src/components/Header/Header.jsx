import { useState, useEffect, useRef } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun, FaDesktop } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'system'
  })
  const themeMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const applyTheme = (selectedTheme) => {
      let isDark = false

      if (selectedTheme === 'system') {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      } else {
        isDark = selectedTheme === 'dark'
      }

      if (isDark) {
        document.documentElement.classList.add('dark-mode')
      } else {
        document.documentElement.classList.remove('dark-mode')
      }
    }

    applyTheme(theme)
    localStorage.setItem('theme', theme)

    // Listen for system theme changes when in system mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [theme])

  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
        setIsThemeMenuOpen(false)
      }
    }

    if (isThemeMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isThemeMenuOpen])

  const toggleDarkMode = () => {
    // Quick toggle: cycle through light -> dark -> light
    const currentIsDark = document.documentElement.classList.contains('dark-mode')
    setTheme(currentIsDark ? 'light' : 'dark')
  }

  const handleThemeSelect = (selectedTheme) => {
    setTheme(selectedTheme)
    setIsThemeMenuOpen(false)
  }

  const getCurrentIcon = () => {
    if (theme === 'system') {
      const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return systemIsDark ? <FaMoon /> : <FaSun />
    }
    return theme === 'dark' ? <FaMoon /> : <FaSun />
  }

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container nav">
        <div className="nav-brand">
          <a href="#hero">Mayur Khairnar</a>
        </div>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <a href={item.href} className="nav-link" onClick={handleNavClick}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="theme-toggle-wrapper" ref={themeMenuRef}>
            <button 
              className="theme-toggle" 
              onClick={toggleDarkMode}
              onContextMenu={(e) => {
                e.preventDefault()
                setIsThemeMenuOpen(!isThemeMenuOpen)
              }}
              onMouseEnter={() => setIsThemeMenuOpen(true)}
              aria-label="Toggle theme"
            >
              {getCurrentIcon()}
            </button>
            
            {isThemeMenuOpen && (
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

          <div className="nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
