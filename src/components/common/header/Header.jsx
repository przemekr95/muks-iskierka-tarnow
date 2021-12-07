import React from 'react';
import Navbar from '../navbar';
import Heading from '../typography/heading';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <section className="header-title">
        <a href="/">
          <img
            className="header-logo"
            src={`${process.env.PUBLIC_URL}/assets/iskierkaLogo.png`}
            alt="Logo MUKS Iskierka Tarnów"
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
          <img
            className="header-logo"
            src={`${process.env.PUBLIC_URL}/assets/herbTarnow.png`}
            alt="Herb Miasta Tarnów"
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
