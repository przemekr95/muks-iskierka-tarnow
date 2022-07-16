import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../atomic/card';
import Image from '../../atomic/image';
import Heading from '../../atomic/typography/heading';
import Text from '../../atomic/typography/text';

import './card-management.scss';

const CardManagement = props => {
  const {
    img,
    title,
    name
  } = props;

  const cardManagementContent = (
    <>
      <Image
        src={img}
        alt={title}
        className="card-image-management"
      />
      <Heading
        text={title}
        appearance="heading_3_small"
        color="blue_text"
        tag="h3"
      />
      <Text
        tag="p"
        text={name}
        font="regular_font"
        size="regular_size"
      />
    </>
  );

  return <Card content={cardManagementContent} />;
};

CardManagement.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardManagement;
