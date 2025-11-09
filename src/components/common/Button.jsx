import PropTypes from 'prop-types'
import './Button.css'

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  icon,
  ...props
}) => {
  const className = `btn btn-${variant}`

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  icon: PropTypes.node,
}

export default Button
