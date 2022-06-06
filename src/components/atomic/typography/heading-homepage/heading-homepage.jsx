import React from 'react';
import PropTypes from 'prop-types';

import './heading-homepage.scss';

const HeadingHomepage = props => {
  const {
    text,
  } = props;

  return (
    <h2 className="heading-homepage">
      {text}
    </h2>
  );
};

HeadingHomepage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadingHomepage;
