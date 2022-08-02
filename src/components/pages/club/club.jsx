import React, { useState, useEffect } from 'react';
import getData from '../../../utils/get-data';
import ClubViews from '../../views/club-views';

import './club.scss';

const Club = () => {
  const [clubPracticesContent, setclubPracticesContent] = useState({
    'minisiatkowka': [],
    'mlodzik': [],
    'kadet': [],
    'junior': [],
    'senior': [],
  });

  useEffect(() => {
    getData('club-practices.json', setclubPracticesContent);
  }, []);

  return (
    <div className="navbar-background">
      <div className="wrapper">
        <ClubViews clubPracticesContent={clubPracticesContent} />
      </div>
    </div>
  );
};
export default Club;
