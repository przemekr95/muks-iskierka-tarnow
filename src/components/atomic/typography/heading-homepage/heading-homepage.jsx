import React from 'react';
import PropTypes from 'prop-types';
// import Text from '../text';

import './heading-homepage.scss';

const HeadingHomepage = props => {
  const {
    // color,
    // appearance,
    // tag,
    text,
  } = props;

  return (
    <h2 className="heading-homepage">
      {text}
    </h2>
  );
};

HeadingHomepage.propTypes = {
  //   color: PropTypes.string,
  //   appearance: PropTypes.string.isRequired,
  //   tag: PropTypes.string,
  text: PropTypes.string.isRequired,
};

// HeadingHomepage.defaultProps = {
//   color: 'black_text',
//   tag: 'h1',
// };

export default HeadingHomepage;
