import PropTypes from 'prop-types'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './SectionTitle.css'

/**
 * Reusable section title component with scroll animation
 * 
 * This component shows section headings that animate when scrolled into view.
 * By default, titles slide up from below when they appear on screen.
 */
const SectionTitle = ({ children, dataText, direction = 'up', delay = 0 }) => {
  // Get animation properties for this title
  const animation = useScrollAnimation({ direction, delay })
  
  return (
    <h2 
      ref={animation.ref}
      className={`section-title ${animation.className}`}
      style={animation.style}
      data-text={dataText || children}
    >
      {children}
    </h2>
  )
}

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  dataText: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down', 'fade']),
  delay: PropTypes.number,
}

export default SectionTitle