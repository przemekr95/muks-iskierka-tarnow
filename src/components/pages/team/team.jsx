import React, { useState, useEffect } from 'react';
import getData from '../../../utils/get-data';
import TeamViews from '../../views/team-views';

import './team.scss';

const Team = () => {
  const [teamContent, setTeamContent] = useState({
    'players': [],
    'coaches': []
  });

  useEffect(() => {
    getData('players.json', setTeamContent);
  }, []);

  return (
    <div className="navbar-background">
      <div className="wrapper">
        <TeamViews teamContent={teamContent} />
      </div>
    </div>
  );
};

export default Team;
