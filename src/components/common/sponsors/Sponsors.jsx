import React from 'react';
import Heading from '../typography/heading';
import Image from '../image';

import './Sponsors.scss';

const Sponsors = () => (
  <div className="wrapper-sponsors">
    <Heading
      color="blue_text"
      appearance="heading_3"
      text="Sponsorzy"
      tag="h3"
    />
    <div className="sponsor-images">
      <Image
        src="/assets/sponsors/grubcio.png"
        alt="Logo Grubcio"
        className="sponsor-logo"
      />
      <Image
        src="/assets/sponsors/marju.png"
        alt="Logo Marju"
        className="sponsor-logo"
      />
      <Image
        src="/assets/sponsors/megael.jpg"
        alt="Logo Megael"
        className="sponsor-logo"
      />
      <Image
        src="/assets/sponsors/mpec.png"
        alt="Logo Mpec"
        className="sponsor-logo"
      />
      <Image
        src="/assets/sponsors/mzps.png"
        alt="Logo MZPS"
        className="sponsor-logo"
      />
      <Image
        src="/assets/sponsors/tarnow.png"
        alt="Logo Tarnowa"
        className="sponsor-logo"
      />
      <Image
        src="/assets/sponsors/tw.png"
        alt="Logo Tarnowskie Wodociągi"
        className="sponsor-logo"
      />
      <Image
        src="/assets/sponsors/zmt.png"
        alt="Logo ZMT"
        className="sponsor-logo"
      />
    </div>
  </div>
);

export default Sponsors;
