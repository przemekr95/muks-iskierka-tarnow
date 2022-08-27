import React from 'react';
import PropTypes from 'prop-types';
import { faMapMarkerAlt, faAddressCard, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Heading from '../../atomic/typography/heading';
import Text from '../../atomic/typography/text';

import './contact-us.scss';

const ContactUs = props => {

  const {
    contactContent
  } = props;

  const NIP = `NIP: ${contactContent.NIP}`;
  const REGON = `REGON: ${contactContent.REGON}`;
  const bank = `Bank: ${contactContent.bank}`;

  const contactUsInfo = (
    <div className="contact-us-info">
      <div className="contact-us-box">
        <FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt} />
        <Heading
          text="Adres"
          appearance="heading_2"
          color="white_text"
          tag="h2"
        />
        <div className="contact-us-text">
          <Text
            text={contactContent.adres1}
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
          <Text
            text={contactContent.adres2}
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
        </div>
      </div>
      <div className="contact-us-box">
        <FontAwesomeIcon className="contact-icon" icon={faAddressCard} />
        <Heading
          text="Dane"
          appearance="heading_2"
          color="white_text"
          tag="h2"
        />
        <div className="contact-us-text">
          <Text
            text={NIP}
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
          <Text
            text={REGON}
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
          <Text
            text={bank}
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
        </div>
      </div>
      <div className="contact-us-box">
        <FontAwesomeIcon className="contact-icon" icon={faAddressBook} />
        <Heading
          text="Kontakt"
          appearance="heading_2"
          color="white_text"
          tag="h2"
        />
        <div className="contact-us-text">
          <Text
            text={contactContent.tel}
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
          <Text
            text={contactContent.email}
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
        </div>
      </div>
    </div>
  );

  const mapComponent = () => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 50.045397005697495, lng: 20.992156840851454 }}
    >
      <Marker position={{ lat: 50.045397005697495, lng: 20.992156840851454 }} />
    </GoogleMap>
  );

  const WrappedMap = withScriptjs(withGoogleMap(mapComponent));

  return (
    <div className="contact-us-wrapper">
      <Heading
        text="Skontaktuj się z nami"
        appearance="heading_1"
        color="white_text"
      />
      {contactUsInfo}
      <div style={{ width: '100%', height: '100%' }}>
        <WrappedMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBx5CD--p8-J_Whz0M3rXuCDJSP87YksGg"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '500px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </div>
  );
};

ContactUs.defaultProps = {
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

ContactUs.propTypes = {
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

export default ContactUs;
