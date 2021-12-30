import React from 'react';
import PropTypes from 'prop-types';
import Text from '../typography/text';

import './Footer.scss';

const Footer = props => {
  const {
    text
  } = props;

  return (
    <footer className="footer-wrapper">
      <Text
        text={text}
        color="light_grey_text"
        font="thin_font"
      />
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
