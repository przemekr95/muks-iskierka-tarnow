import React from 'react';
import Text from '../typography/text';
import Heading from '../typography/heading';
import Image from '../image';

import './next-match.scss';

const NextMatch = () => (
  <div className="next-match-wrapper box-shadow">
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
    <div className="next-match-teams">
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

export default NextMatch;
