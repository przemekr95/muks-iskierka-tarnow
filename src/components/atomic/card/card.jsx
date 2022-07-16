import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';

const Card = props => {
  const {
    content
  } = props;

  return (
    <div className="box-shadow card">
      {content}
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Card;
