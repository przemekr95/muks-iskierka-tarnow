import React from 'react';
import PropTypes from 'prop-types';
import TeamCoaches from './team-coaches';
import TeamPlayers from './team-players';

import './team-views.scss';

const TeamViews = props => {
  const {
    teamContent
  } = props;

  return (
    <>
      <TeamCoaches coaches={teamContent.coaches} />
      <TeamPlayers players={teamContent.players} />
    </>
  );
};

TeamViews.defaultProps = {
  teamContent: PropTypes.shape(
    [{
      'name': '',
      'position': '',
      'category': '',
      'img': ''
    }]
  )
};

TeamViews.propTypes = {
  teamContent: PropTypes.objectOf(PropTypes.array)
};

export default TeamViews;
