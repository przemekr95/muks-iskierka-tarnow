import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../atomic/card';
import Image from '../../atomic/image';
import Heading from '../../atomic/typography/heading';
import Text from '../../atomic/typography/text';

import './card-players.scss';

const CardPlayers = props => {
  const {
    img,
    position,
    name
  } = props;

  const cardManagementContent = (
    <div className="card-players">
      <Image
        src={img}
        alt={name}
        className="card-image-players"
      />
      <Heading
        text={name}
        appearance="heading_3_small"
        color="blue_text"
        tag="h3"
      />
      <Text
        tag="p"
        text={position}
        font="regular_font"
        size="regular_size"
      />
    </div>
  );

  return <Card content={cardManagementContent} />;
};

CardPlayers.propTypes = {
  img: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardPlayers;
