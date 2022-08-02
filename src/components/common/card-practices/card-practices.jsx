import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Card from '../../atomic/card';
import Text from '../../atomic/typography/text';

import './card-practices.scss';

const CardPractices = props => {
  const {
    day,
    hour,
    place
  } = props;

  const cardPracticesContent = (
    <div className="card-practices">
      <div className="card-practices-details">
        <FontAwesomeIcon icon={faCalendarDay} className="practices-icon" />
        <Text
          tag="p"
          text={day}
          font="regular_font"
          size="regular_size"
        />
      </div>
      <div className="card-practices-details">
        <FontAwesomeIcon icon={faClock} className="practices-icon" />
        <Text
          tag="p"
          text={hour}
          font="regular_font"
          size="regular_size"
        />
      </div>
      <div className="card-practices-details">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="practices-icon" />
        <Text
          tag="p"
          text={place}
          font="regular_font"
          size="regular_size"
        />
      </div>
    </div>
  );

  return <Card content={cardPracticesContent} />;
};

CardPractices.propTypes = {
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};

export default CardPractices;
