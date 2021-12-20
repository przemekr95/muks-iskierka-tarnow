import React from 'react';
import Navbar from '../navbar';
import Heading from '../typography/heading';
import Image from '../image';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <section className="header-title">
        <a href="/">
          <Image
            src="/assets/iskierkaLogo.png"
            alt="Logo MUKS Iskierka Tarnów"
            className="header-logo"
          />
        </a>
        <div>
          <Heading
            text="MUKS Iskierka Tarnów"
            color="blue_text"
            appearance="heading_1"
          />
          <Heading
            text="#JednaDrużynaJedenCel"
            color="blue_text"
            appearance="heading_2"
            tag="h2"
          />
        </div>
        <a href="https://www.tarnow.pl/">
          <Image
            src="/assets/herbTarnow.png"
            alt="Herb Miasta Tarnów"
            className="header-logo"
          />
        </a>
      </section>
      <section>
        <Navbar />
      </section>
    </header>
  );
}

export default Header;
