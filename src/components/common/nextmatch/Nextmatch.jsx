import React from 'react';
import Text from '../typography/text';
import Heading from '../typography/heading';
import Image from '../image';

import './Nextmatch.scss';

const Nextmatch = () => (
  <div className="nextmatch-wrapper box-shadow">
    <Heading
      color="blue_text"
      appearance="heading_3"
      text="Następny mecz"
      tag="h3"
    />
    <Text
      text="01.01.2022 18:00"
      color="black_text"
      font="regular_font"
      tag="p"
    />
    <Text
      text="Traugutta 5A, Tarnów"
      color="black_text"
      font="thin_font"
      tag="p"
    />
    <div className="nextmatch-teams">
      <div>
        <Text
          text="MUKS Iskierka Tarnów"
          color="black_text"
          font="bold_font"
          tag="p"
        />
        <Image
          src="/assets/iskierkaLogo.png"
          alt="Logo MUKS Iskierka Tarnów"
          className="header-logo"
        />
      </div>
      <div>
        <Text
          text="VS"
          color="blue_text"
          font="bold_font"
          tag="p"
        />
      </div>
      <div>
        <Text
          text="MUKS Iskierka Tarnów"
          color="black_text"
          font="bold_font"
          tag="p"
        />
        <Image
          src="/assets/iskierkaLogo.png"
          alt="Logo MUKS Iskierka Tarnów"
          className="header-logo"
        />
      </div>
    </div>

  </div>
);

export default Nextmatch;
