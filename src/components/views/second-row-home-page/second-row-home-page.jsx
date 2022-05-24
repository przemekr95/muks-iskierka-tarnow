import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../common/typography/heading/heading';
import LastMatchContent from '../last-match-content/last-match-content';

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
      <LastMatchContent title={title} />
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
