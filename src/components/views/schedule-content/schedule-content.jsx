import React from 'react';
import PropTypes from 'prop-types';
import Schedule from '../../common/schedule/schedule';

import './schedule-content.scss';

const ScheduleContent = props => {
  const {
    title
  } = props;

  return (
    <div>
      <Schedule />
    </div>
  );
};

ScheduleContent.propTypes = {
  title: PropTypes.string,
};

ScheduleContent.defaultProps = {
  title: '',
};

export default ScheduleContent;
