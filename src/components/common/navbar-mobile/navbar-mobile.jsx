import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../../atomic/typography/text';
import Image from '../../atomic/image';

import './navbar-mobile.scss';

const NavbarMobile = props => {

  const {
    isBackground
  } = props;

  const [menu, setMenu] = useState(false);

  const navbarLogo = (
    <div className="navbar-logo-mobile">
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

  const navItems = [
    { name: 'Strona główna', link: '/' },
    { name: 'Klub', link: '/club' },
    { name: 'Drużyna', link: '/team' },
    { name: 'Kontakt', link: '/contact' }
  ];

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

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className={isBackground || menu ? 'navbar column navbar-color' : 'navbar column'}>
        {menu ?
          <ul
            className="column mobile-list"
          >
            {navbarRight}
          </ul> :
          null}
      </nav>
      {navbarLogo}
      <button
        type="button"
        className="navbar-button"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  );
};

NavbarMobile.propTypes = {
  isBackground: PropTypes.bool.isRequired
};

export default NavbarMobile;
