import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../common/typography/heading/heading';
import Text from '../../common/typography/text/text';

import './first-row-home-page.scss';

const FirstRowHomePage = props => {
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

FirstRowHomePage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

FirstRowHomePage.defaultProps = {
  title: '',
  description: '',
};

export default FirstRowHomePage;
