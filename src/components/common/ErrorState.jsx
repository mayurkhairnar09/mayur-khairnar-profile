import PropTypes from 'prop-types'
import { FaExclamationTriangle } from 'react-icons/fa'
import './ErrorState.css'

const ErrorState = ({
    message = 'Unable to load data.',
    onRetry = null,
    minHeight = '200px'
}) => {
    return (
        <div className="error-state" style={{ minHeight }}>
            <FaExclamationTriangle className="error-icon" />
            <p className="error-message">{message}</p>
            {onRetry && (
                <button onClick={onRetry} className="retry-button">
                    Try Again
                </button>
            )}
        </div>
    )
}

ErrorState.propTypes = {
    message: PropTypes.string,
    onRetry: PropTypes.func,
    minHeight: PropTypes.string
}

export default ErrorState
