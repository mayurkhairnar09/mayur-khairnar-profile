import PropTypes from 'prop-types'
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'
import SectionTitle from './SectionTitle'

/**
 * Reusable section wrapper that handles loading and error states
 * Reduces code duplication across all section components
 */
const SectionWrapper = ({ 
  id, 
  className = '', 
  title, 
  loading, 
  error, 
  onRetry, 
  loadingMessage,
  errorMessage = 'Unable to load data.',
  children 
}) => {
  if (loading) {
    return (
      <section id={id} className={`section ${className}`}>
        <div className="container">
          <SectionTitle>{title}</SectionTitle>
          <LoadingState message={loadingMessage} />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id={id} className={`section ${className}`}>
        <div className="container">
          <SectionTitle>{title}</SectionTitle>
          <ErrorState message={errorMessage} onRetry={onRetry} />
        </div>
      </section>
    )
  }

  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <SectionTitle>{title}</SectionTitle>
        {children}
      </div>
    </section>
  )
}

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.any,
  onRetry: PropTypes.func,
  loadingMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.node
}

export default SectionWrapper
