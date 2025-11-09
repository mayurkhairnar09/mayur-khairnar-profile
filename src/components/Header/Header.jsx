import { useState, useEffect, useMemo, useCallback } from 'react'
import { FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'system'
  })

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

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [theme])

  const iconMap = useMemo(() => ({
    'Home': <FaHome />,
    'About': <FaUser />,
    'Skills': <FaCode />,
    'Experience': <FaBriefcase />,
    'Education': <FaGraduationCap />,
    'Projects': <FaProjectDiagram />,
    'Contact': <FaEnvelope />,
  }), [])

  const navItems = useMemo(() => [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ], [])

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container nav">
        {/* Mobile Menu Toggle */}
        <div
          className="nav-toggle"
          onClick={toggleMobileMenu}
          role="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          tabIndex={0}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu (Desktop + Mobile) */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <a
                href={item.href}
                className={`nav-link ${isMobileMenuOpen ? 'mobile-nav-link' : ''}`}
                onClick={handleNavClick}
                aria-label={`Navigate to ${item.name}`}
              >
                <span className="nav-icon">{iconMap[item.name]}</span>
                <span className="nav-label">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="nav-backdrop"
            onClick={toggleMobileMenu}
            role="button"
            aria-label="Close menu"
            tabIndex={0}
          />
        )}

        {/* Theme Toggle */}
        <div className="nav-actions">
          <ThemeToggle theme={theme} onThemeChange={setTheme} />
        </div>
      </nav>
    </header>
  )
}

export default Header