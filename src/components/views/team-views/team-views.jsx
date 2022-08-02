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
  teamContent: PropTypes.shape([{
    'name': PropTypes.string.isRequired,
    'position': PropTypes.string.isRequired,
    'category': PropTypes.string.isRequired,
    'img': PropTypes.string.isRequired
  }])
};

export default TeamViews;
