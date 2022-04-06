import React from 'react';
// import Text from '../typography/text';
import Heading from '../typography/heading';
import Image from '../image';

import './storycard.scss';

const Storycard = () => (
  <div className="storycard-wrapper box-shadow">
    <Heading
      color="blue_text"
      appearance="heading_3"
      text="Zawodnicy"
      tag="h3"
    />
    <div className="storycard">
      <Image
        src="/assets/images/Rubacha.jpg"
        alt="Zawodnik"
        className="header-logo"
      />
    </div>
  </div>
);

export default Storycard;
