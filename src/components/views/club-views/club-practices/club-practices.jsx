import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../atomic/typography/heading';
import CardPracticesList from '../../../common/card-practices-list';

import './club-practices.scss';

const ClubPractices = props => {
  const {
    data
  } = props;

  return (
    <section className="center">
      <Heading
        text="Treningi"
        appearance="heading_2_bold"
        color="blue_text"
        tag="h2"
      />
      <CardPracticesList data={data} />
    </section>
  );
};

ClubPractices.defaultProps = {
  data: PropTypes.shape([{
    'day': '',
    'hour': '',
    'place': ''
  }])
};

ClubPractices.propTypes = {
  data: PropTypes.shape([{
    'day': PropTypes.string,
    'hour': PropTypes.string,
    'place': PropTypes.string
  }])
};


export default ClubPractices;
