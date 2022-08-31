import React from 'react';
import PropTypes from 'prop-types';
import HeadingHomepage from '../../../atomic/typography/heading-homepage';
import Text from '../../../atomic/typography/text';

import './first-row-homepage.scss';

const FirstRowHomepage = props => {
  const {
    title,
    description
  } = props;

  return (
    <div className="first-row-homepage">
      <HeadingHomepage text={title} />
      <Text
        tag="p"
        text={description}
        font="regular_font"
        size="regular_size"
        lineHeight="large_line"
      />
    </div>
  );
};

FirstRowHomepage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

FirstRowHomepage.defaultProps = {
  title: 'Nasza drużyna',
  description: 'Międzyszkolny Uczniowski Klub Sportowy Iskierka Tarnów'
};

export default FirstRowHomepage;
