import React from 'react';
import PropTypes from 'prop-types';
import Schedule from '../../../common/schedule';
import HeadingHomepage from '../../../atomic/typography/heading-homepage';

import './third-row-homepage.scss';

const ThirdRowHomepage = props => {
  const {
    title
  } = props;

  return (
    <div>
      <HeadingHomepage text={title} />
      <Schedule />
    </div>
  );
};

ThirdRowHomepage.propTypes = {
  title: PropTypes.string,
};

ThirdRowHomepage.defaultProps = {
  title: 'Najbliższe mecze',
};

export default ThirdRowHomepage;
