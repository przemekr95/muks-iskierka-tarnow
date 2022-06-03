import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../common/typography/heading';
import LastMatch from '../../../common/last-match';

import './second-row-homepage.scss';

const SecondRowHomepage = props => {
  const {
    title
  } = props;

  return (
    <div>
      <Heading
        color="blue_text"
        appearance="heading_2_bold"
        text={title}
        tag="h2"
      />
      <LastMatch />
    </div>
  );
};

SecondRowHomepage.propTypes = {
  title: PropTypes.string.isRequired
};

export default SecondRowHomepage;
