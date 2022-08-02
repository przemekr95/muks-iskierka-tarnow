import React from 'react';
import PropTypes from 'prop-types';
import CardPlayersList from '../../../common/card-players-list';

import './team-players.scss';

const TeamPlayers = props => {
  const {
    players
  } = props;

  return (
    <div className="card-wrapper">
      <CardPlayersList players={players} />
    </div>
  );
};

TeamPlayers.defaultProps = {
  players: PropTypes.shape(
    [{
      'name': '',
      'position': '',
      'category': '',
      'img': ''
    }]
  )
};

TeamPlayers.propTypes = {
  players: PropTypes.shape([{
    'name': PropTypes.string.isRequired,
    'position': PropTypes.string.isRequired,
    'category': PropTypes.string.isRequired,
    'img': PropTypes.string.isRequired
  }])
};

export default TeamPlayers;
