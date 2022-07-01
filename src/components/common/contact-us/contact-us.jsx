import React from 'react';
import { faMapMarkerAlt, faAddressCard, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import Heading from '../../atomic/typography/heading';
import Text from '../../atomic/typography/text';

import './contact-us.scss';

const ContactUs = () => {

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
            text="ul. Krzyska 118,"
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
          <Text
            text="33-103 Tarnów"
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
            text="NIP: 873-26-11-598"
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
          <Text
            text="REGON: 850509910"
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
          <Text
            text="Bank: 96 1160 2202 0000 0000 2839 6311"
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
            text="605 721 423"
            color="light_grey_text"
            font="regular_font"
            tag="p"
          />
          <Text
            text="andlos@tlen.pl"
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


export default ContactUs;
