import React from 'react';
import PropTypes from 'prop-types';

import './text.scss';

const Text = props => {
  const {
    color,
    font,
    tag: Tag,
    text,
    size,
    lineHeight,
    ...renderableProps
  } = props;

  const composedClassName = `default_text ${size} ${color} ${font} ${lineHeight}`;
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
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  size: PropTypes.string,
  lineHeight: PropTypes.string
};

Text.defaultProps = {
  color: 'black_text',
  font: 'inherit_font',
  tag: 'span',
  size: 'inherit_size',
  lineHeight: 'regular_line'
};

export default Text;
