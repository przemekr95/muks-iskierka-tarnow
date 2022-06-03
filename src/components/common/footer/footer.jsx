import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atomic/typography/text';

import './footer.scss';

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
