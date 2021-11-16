import React from 'react';
import Navbar from '../navbar';

import './Header.scss';

function Header() {
  return (
    <header>
      <section>
        <a href="/">logo</a>
      </section>
      <section>
        <Navbar />
      </section>
    </header>
  );
}

export default Header;
