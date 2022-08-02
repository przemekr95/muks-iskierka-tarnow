import React from 'react';
import PropTypes from 'prop-types';
import ClubDownload from './club-download';
import ClubHistory from './club-history';
import ClubManagement from './club-management';
import ClubPractices from './club-practices';

import './club-views.scss';

const ClubViews = props => {
  const {
    clubPracticesContent
  } = props;

  return (
    <>
      <ClubHistory />
      <ClubManagement />
      <ClubPractices data={clubPracticesContent} />
      <ClubDownload />
    </>
  );
};

ClubViews.defaultProps = {
  clubPracticesContent: PropTypes.shape(
    [{
      'day': '',
      'hour': '',
      'place': ''
    }]
  )
};

ClubViews.propTypes = {
  clubPracticesContent: PropTypes.shape([{
    'day': PropTypes.string,
    'hour': PropTypes.string,
    'place': PropTypes.string
  }])
};


export default ClubViews;
