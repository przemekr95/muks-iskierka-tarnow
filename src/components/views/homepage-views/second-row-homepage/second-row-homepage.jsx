import React from 'react';
import PropTypes from 'prop-types';
import HeadingHomepage from '../../../atomic/typography/heading-homepage';
import LastMatch from '../../../common/last-match';

import './second-row-homepage.scss';

const SecondRowHomepage = props => {
  const {
    title
  } = props;

  return (
    <div>
      <HeadingHomepage text={title} />
      <LastMatch />
    </div>
  );
};

SecondRowHomepage.propTypes = {
  title: PropTypes.string,
};

SecondRowHomepage.defaultProps = {
  title: 'Ostatni mecz',
};

export default SecondRowHomepage;
