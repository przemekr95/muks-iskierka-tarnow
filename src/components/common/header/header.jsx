import React, { useEffect, useState } from 'react';
import NavbarDesktop from '../navbar-desktop/navbar-desktop';
import NavbarMobile from '../navbar-mobile/navbar-mobile';

import './header.scss';

const Header = () => {

  const [mobile, setMobile] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (document.documentElement.clientWidth >= 991) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  const changeNavbarBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeNavbar();
    changeNavbarBackground();
    window.addEventListener('resize', changeNavbar);
    window.addEventListener('scroll', changeNavbarBackground);
    return () => {
      window.removeEventListener('resize', changeNavbar);
      window.removeEventListener('scroll', changeNavbarBackground);
    };
  });

  return (
    <header>
      {mobile ? <NavbarMobile isBackground={navbar} /> : <NavbarDesktop isBackground={navbar} />}
    </header>
  );
};

export default Header;
