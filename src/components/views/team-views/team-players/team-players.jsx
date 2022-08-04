import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../atomic/typography/heading';
import CardPlayersList from '../../../common/card-players-list';
import FilterButtons from '../../../common/filter-buttons';

import './team-players.scss';

const TeamPlayers = props => {
  const {
    players
  } = props;


  const allCategories = ['wszyscy', ...new Set(players.map(item => item.category))];

  const [playersList, setPlayersList] = useState(players);

  const [buttons, setButtons] = useState(allCategories);

  const filter = button => {
    if (button === 'wszyscy') {
      setPlayersList(players);
      return;
    }
    const filteredData = players.filter(item => item.category === button);
    setPlayersList(filteredData);
  };

  useEffect(() => {
    setPlayersList(players);
    setButtons(allCategories);
  }, [players]);

  return (
    <section>
      <Heading
        text="Drużyna"
        appearance="heading_2_bold"
        color="blue_text"
        tag="h2"
      />
      <div className="card-wrapper">
        <FilterButtons filter={filter} buttons={buttons} />
        <CardPlayersList players={playersList} />
      </div>
    </section>
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
