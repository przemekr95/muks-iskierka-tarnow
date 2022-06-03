import React from 'react';
import Text from '../../atomic/typography/text';

import './navbar.scss';

function Navbar() {

  const navItems = [
    { name: 'Strona Główna', link: '/' },
    { name: 'Aktualności', link: 'https://www.facebook.com/MUKSIskierkaTarnow' },
    { name: 'Klub', link: '/club' },
    { name: 'Drużyna', link: '/team' },
    { name: 'Kontakt', link: '/contact' }
  ];

  const nav = navItems.map(item => (
    <li
      key={item.name}
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
    <nav className="navbar">
      <ul>
        {nav}
      </ul>
    </nav>
  );
}

export default Navbar;
