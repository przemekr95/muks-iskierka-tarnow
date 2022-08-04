import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './button.scss';

const Button = props => {
  const {
    text,
    appearance,
    corner,
    className,
    icon,
    onClick,
  } = props;

  return (
    <button
      type="button"
      className={`button ${appearance} ${corner} ${className}`}
      onClick={onClick}
    >
      {icon ? <FontAwesomeIcon icon={icon} className="button-icon" /> : null}
      {text}
    </button>
  );
};

Button.defaultProps = {
  icon: '',
  onClick: () => { },
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  appearance: PropTypes.string.isRequired,
  corner: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
