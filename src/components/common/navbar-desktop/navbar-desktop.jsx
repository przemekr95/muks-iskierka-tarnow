import React from 'react';
import PropTypes from 'prop-types';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../../atomic/typography/text';
import Image from '../../atomic/image';

import './navbar-desktop.scss';

const NavbarDesktop = props => {

  const {
    isBackground
  } = props;

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
          alt="Logo MUKS Iskierka Tarnów"
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
    <>
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

      <li
        className="navbar-list"
      >
        <a
          href="/"
          className="navbar-list-item"
        >
          <Text
            text="Strona główna"
            color="white_text"
            font="regular_font"
          />
        </a>
      </li>
    </>
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
    <nav className={isBackground ? 'navbar row navbar-color' : 'navbar row'}>
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

NavbarDesktop.propTypes = {
  isBackground: PropTypes.bool.isRequired
};

export default NavbarDesktop;
