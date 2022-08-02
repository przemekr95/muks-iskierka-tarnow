import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import CardPractices from '../card-practices';
import Heading from '../../atomic/typography/heading';

import './card-practices-list.scss';

const CardPracticesList = props => {
  const {
    data
  } = props;

  const minisiatkowka = data?.minisiatkowka;
  const mlodzik = data?.mlodzik;
  const kadet = data?.kadet;
  const junior = data?.junior;
  const senior = data?.senior;

  const displayPracticeCard = (info, age) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleList = () => {
      setIsEnabled(!isEnabled);
    };

    const practiceCard = info.map((item, index) => (
      <li key={index}>
        <CardPractices
          day={item.day}
          hour={item.hour}
          place={item.place}
        />
      </li>
    ));

    const practiceCardList = (
      <>
        <div
          className="row practice-card-list"
          onClick={toggleList}
        >
          <FontAwesomeIcon icon={faSortDown} className="down-icon" />
          <Heading
            text={age}
            appearance="heading_3_small"
            color="blue_text"
            tag="h3"
          />
          <FontAwesomeIcon icon={faSortDown} className="down-icon" />
        </div>
        {isEnabled ? <ul className="card-wrapper">{practiceCard}</ul> : null}
      </>
    );
    return practiceCardList;
  };

  const displayPracticeCardMinisiatkowka = displayPracticeCard(minisiatkowka, 'Minisiatkówka');
  const displayPracticeCardMlodzik = displayPracticeCard(mlodzik, 'Młodzik');
  const displayPracticeCardKadet = displayPracticeCard(kadet, 'Kadet');
  const displayPracticeCardJunior = displayPracticeCard(junior, 'Junior');
  const displayPracticeCardSenior = displayPracticeCard(senior, 'Senior');

  return (
    <>
      {displayPracticeCardMinisiatkowka}
      {displayPracticeCardMlodzik}
      {displayPracticeCardKadet}
      {displayPracticeCardJunior}
      {displayPracticeCardSenior}
    </>
  );
};

CardPracticesList.defaultProps = {
  data: PropTypes.shape([{
    'day': '',
    'hour': '',
    'place': ''
  }])
};

CardPracticesList.propTypes = {
  data: PropTypes.shape([{
    'day': PropTypes.string,
    'hour': PropTypes.string,
    'place': PropTypes.string
  }])
};

export default CardPracticesList;
