import React from 'react';
import PropTypes from 'prop-types';
import Schedule from '../../../common/schedule';
import Heading from '../../../atomic/typography/heading';

import './third-row-homepage.scss';

const ThirdRowHomepage = props => {
  const {
    title
  } = props;

  return (
    <div className="center">
      <Heading
        color="blue_text"
        appearance="heading_2_bold"
        text={title}
        tag="h2"
      />
      <Schedule />
    </div>
  );
};

ThirdRowHomepage.propTypes = {
  title: PropTypes.string.isRequired
};

export default ThirdRowHomepage;
