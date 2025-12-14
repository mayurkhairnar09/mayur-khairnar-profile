import { useEffect, useState, useMemo } from 'react'
import '../../styles/dynamic-background.css'

/**
 * Dynamic Background Component - OPTIMIZED
 * 
 * Performance improvements:
 * - Memoized particle array generation
 * - Conditional rendering based on user preferences
 * - Uses CSS animations (GPU accelerated) instead of JS
 * - Respects prefers-reduced-motion
 */
const DynamicBackground = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Memoize particle array to prevent recreation on every render
  const particles = useMemo(() => Array.from({ length: 6 }, (_, i) => i), [])

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes to motion preference
    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <div className="dynamic-background" aria-hidden="true">
      {/* Floating geometric shapes - only show if motion is allowed */}
      {!prefersReducedMotion && (
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      )}

      {/* Subtle sparkle particles */}
      {!prefersReducedMotion && (
        <div className="particles">
          {particles.map((i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DynamicBackground
