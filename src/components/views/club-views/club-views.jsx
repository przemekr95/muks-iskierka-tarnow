import React from 'react';
import ClubDownload from './club-download';
import ClubHistory from './club-history';
import ClubManagement from './club-management';
import ClubPractices from './club-practices';

import './club-views.scss';

const ClubViews = () => (
  <section>
    <div>test</div>
    <ClubHistory />
    <ClubManagement />
    <ClubPractices />
    <ClubDownload />
  </section>
);

export default ClubViews;
