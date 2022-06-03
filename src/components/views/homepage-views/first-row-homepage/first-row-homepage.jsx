import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../atomic/typography/heading';
import Text from '../../../atomic/typography/text';

import './first-row-homepage.scss';

const FirstRowHomepage = props => {
  const {
    title,
    description
  } = props;

  return (
    <div>
      <Heading
        color="blue_text"
        appearance="heading_2_bold"
        text={title}
        tag="h2"
      />
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FirstRowHomepage;
