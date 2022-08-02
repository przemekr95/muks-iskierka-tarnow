import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../atomic/typography/heading';
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
    <section>
      <Heading
        text="Drużyna"
        appearance="heading_2_bold"
        color="blue_text"
        tag="h2"
      />
      <ul className="card-wrapper">
        {playersCard}
      </ul>
    </section>
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
  players: PropTypes.shape([{
    'name': PropTypes.string.isRequired,
    'position': PropTypes.string.isRequired,
    'category': PropTypes.string.isRequired,
    'img': PropTypes.string.isRequired
  }])
};

export default CardPlayersList;
