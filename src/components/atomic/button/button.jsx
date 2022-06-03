import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = props => {
  const {
    text,
    appearance,
    corner
  } = props;

  return (
    <button
      type="button"
      className={`button ${appearance} ${corner}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  appearance: PropTypes.string.isRequired,
  corner: PropTypes.string.isRequired,
};

export default Button;
