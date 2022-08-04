import React from 'react';
import PropTypes from 'prop-types';
import CardPlayers from '../../../common/card-players';
import Heading from '../../../atomic/typography/heading';

import './team-coaches.scss';

const TeamCoaches = props => {
  const {
    coaches
  } = props;

  const coachesCard = coaches.map((item, index) => (
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
        text="Trener"
        appearance="heading_2_bold"
        color="blue_text"
        tag="h2"
      />
      <ul className="card-wrapper-coaches">
        {coachesCard}
      </ul>
    </section>
  );
};

TeamCoaches.defaultProps = {
  coaches: PropTypes.shape(
    [{
      'name': '',
      'position': '',
      'category': '',
      'img': ''
    }]
  )
};

TeamCoaches.propTypes = {
  coaches: PropTypes.shape([{
    'name': PropTypes.string.isRequired,
    'position': PropTypes.string.isRequired,
    'category': PropTypes.string.isRequired,
    'img': PropTypes.string.isRequired
  }])
};

export default TeamCoaches;
