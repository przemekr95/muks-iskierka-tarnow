import React from 'react';
import ClubDownload from './club-download';
import ClubHistory from './club-history';
import ClubManagement from './club-management';
import ClubPractices from './club-practices';

import './club-views.scss';

const ClubViews = () => (
  <>
    <ClubHistory />
    <ClubManagement />
    <ClubPractices />
    <ClubDownload />
  </>
);

export default ClubViews;
