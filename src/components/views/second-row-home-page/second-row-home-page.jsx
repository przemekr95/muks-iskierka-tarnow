import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../common/typography/heading/heading';

import './second-row-home-page.scss';

const SecondRowHomePage = props => {
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
    </div>
  );
};

SecondRowHomePage.propTypes = {
  title: PropTypes.string,
};

SecondRowHomePage.defaultProps = {
  title: '',
};

export default SecondRowHomePage;
