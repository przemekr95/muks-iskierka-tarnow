import React from 'react';
import PropTypes from 'prop-types';
import CardPlayers from '../card-players';

import './card-players-list.scss';

const CardPlayersList = props => {
  const {
    players
  } = props;

  const playersCard = players.map((item, index) => (
    <li key={index}>
      <CardPlayers
        img={item.img}
        position={item.position}
        name={item.name}
      />
    </li>
  ));

  return (
    <ul className="card-wrapper">
      {playersCard}
    </ul>
  );
};

CardPlayersList.defaultProps = {
  players: PropTypes.shape(
    [{
      'name': '',
      'position': '',
      'category': '',
      'img': ''
    }]
  )
};

CardPlayersList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object)
};

export default CardPlayersList;
