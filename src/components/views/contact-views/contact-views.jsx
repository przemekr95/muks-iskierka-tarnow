import React from 'react';
import PropTypes from 'prop-types';
import ContactUs from '../../common/contact-us';

import './contact-views.scss';

const ContactViews = props => {

  const {
    contactContent
  } = props;

  return (
    <section>
      <ContactUs contactContent={contactContent} />
    </section>
  );
};

ContactViews.defaultProps = {
  contactContent: PropTypes.shape(
    [{
      'adres1': '',
      'adres2': '',
      'NIP': '',
      'REGON': '',
      'bank': '',
      'tel': '',
      'email': ''
    }]
  )
};

ContactViews.propTypes = {
  contactContent: PropTypes.shape([{
    'adres1': PropTypes.string,
    'adres2': PropTypes.string,
    'NIP': PropTypes.string,
    'REGON': PropTypes.string,
    'bank': PropTypes.string,
    'tel': PropTypes.string,
    'email': PropTypes.string
  }])
};

export default ContactViews;
