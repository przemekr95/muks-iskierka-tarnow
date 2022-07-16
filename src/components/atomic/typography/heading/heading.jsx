import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text';

import './heading.scss';

const Heading = props => {
  const {
    color,
    appearance,
    tag,
    text,
  } = props;

  const getAppearance = appearanceValue => {
    switch (appearanceValue) {
      case 'heading_1':
        return {
          size: 'heading_1_size',
          font: 'thin_font'
        };
      case 'heading_2':
        return {
          size: 'heading_2_size',
          font: 'thin_font'
        };
      case 'heading_2_bold':
        return {
          size: 'heading_2_size_margin',
          font: 'bold_font'
        };
      case 'heading_3':
        return {
          size: 'heading_3_size',
          font: 'bold_font'
        };
      case 'heading_3_large':
        return {
          size: 'heading_3_size_large',
          font: 'bold_font'
        };
      case 'heading_3_small':
        return {
          size: 'heading_3_size_small',
          font: 'regular_font'
        };
      default:
        return null;
    }
  };

  const textProps = getAppearance(appearance);
  return (
    <Text
      {...textProps}
      tag={tag}
      text={text}
      color={color}
    />
  );
};

Heading.propTypes = {
  color: PropTypes.string,
  appearance: PropTypes.string.isRequired,
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  color: 'black_text',
  tag: 'h1',
};

export default Heading;
