import React, { useEffect, useState } from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../../atomic/typography/text';
import Image from '../../atomic/image';

import './navbar.scss';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeNavbarBackground();
    window.addEventListener('scroll', changeNavbarBackground);
  });

  const navItems = [
    { name: 'Klub', link: '/club' },
    { name: 'Drużyna', link: '/team' },
    { name: 'Kontakt', link: '/contact' }
  ];

  const navbarLogo = (
    <div className="navbar-logo">
      <div className="navbar-logo-image">
        <Image
          src="assets/iskierkaLogoBiale.png"
          alt="{item.alt}"
          className="club-logo"
        />
      </div>
      <hr className="navbar-logo-line" />
      <div className="navbar-logo-text">
        <Text
          text="MUKS Iskierka"
          color="white_text"
          font="thin_font"
        />
        <Text
          text="Tarnów"
          color="white_text"
          font="thin_font"
        />
      </div>
    </div>
  );

  const navbarLeft = (
    <li
      className="navbar-list"
    >
      <a
        href="https://www.facebook.com/MUKSIskierkaTarnow"
        className="navbar-list-item"
      >
        <FontAwesomeIcon className="navbar-facebook-icon" icon={faFacebook} />
        <Text
          text="Aktualności"
          color="white_text"
          font="regular_font"
        />
      </a>
    </li>
  );

  const navbarRight = navItems.map((item, index) => (
    <li
      key={index}
      className="navbar-list"
    >
      <a
        href={item.link}
        className="navbar-list-item"
      >
        <Text
          text={item.name}
          color="white_text"
          font="regular_font"
        />
      </a>
    </li>
  ));

  return (
    <nav className={navbar ? 'navbar row navbar-color' : 'navbar row'}>
      <ul>
        {navbarLeft}
      </ul>
      {navbarLogo}
      <ul>
        {navbarRight}
      </ul>
    </nav>
  );
};

export default Navbar;
