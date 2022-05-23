import React from 'react';
import PropTypes from 'prop-types';
import ScheduleContent from '../schedule-content/schedule-content';
import Heading from '../../common/typography/heading/heading';

import './third-row-home-page.scss';

const ThirdRowHomePage = props => {
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
      <ScheduleContent title={title} />
    </div>
  );
};

ThirdRowHomePage.propTypes = {
  title: PropTypes.string,
};

ThirdRowHomePage.defaultProps = {
  title: '',
};

export default ThirdRowHomePage;
