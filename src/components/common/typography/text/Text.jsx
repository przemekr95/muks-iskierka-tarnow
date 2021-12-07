import React from 'react';
import PropTypes from 'prop-types';

import './Text.scss';

const Text = props => {
  const {
    color,
    font,
    tag: Tag,
    text,
    size,
    ...renderableProps
  } = props;

  const composedClassName = `default_text ${size} ${color} ${font}`;
  return (
    <Tag {...renderableProps} className={composedClassName}>
      {text}
    </Tag>
  );
};

Text.propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Text.defaultProps = {
  color: 'black_text',
  font: 'inherit_font',
  tag: 'span',
  size: 'inherit_size'
};

export default Text;
