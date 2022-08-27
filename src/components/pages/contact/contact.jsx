import React, { useState, useEffect } from 'react';
import getData from '../../../utils/get-data';
import ContactViews from '../../views/contact-views';

import './contact.scss';

const Contact = () => {

  const [contactContent, setContactContent] = useState({});

  useEffect(() => {
    getData('contact.json', setContactContent);
  }, []);

  return (
    <div className="wrapper-contact-us">
      <ContactViews contactContent={contactContent} />
    </div>
  );
};

export default Contact;
