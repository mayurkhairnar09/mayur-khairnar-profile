import PropTypes from 'prop-types'
import './LoadingState.css'

const LoadingState = ({ message = 'Loading...', minHeight = '200px' }) => {
  return (
    <div className="loading-state" style={{ minHeight }}>
      <div className="loading-spinner"></div>
      <p className="loading-message">{message}</p>
    </div>
  )
}

LoadingState.propTypes = {
  message: PropTypes.string,
  minHeight: PropTypes.string
}

export default LoadingState
