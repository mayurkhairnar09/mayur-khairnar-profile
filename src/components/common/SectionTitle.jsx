import PropTypes from 'prop-types'
import './SectionTitle.css'

const SectionTitle = ({ children, dataText }) => {
  return (
    <h2 className="section-title" data-text={dataText || children}>
      {children}
    </h2>
  )
}

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  dataText: PropTypes.string,
}

export default SectionTitle
