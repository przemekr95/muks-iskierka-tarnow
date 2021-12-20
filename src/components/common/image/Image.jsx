import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {

  const {
    src,
    alt,
    className
  } = props;

  return <img src={`${process.env.PUBLIC_URL}${src}`} alt={alt} className={className} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Image;
