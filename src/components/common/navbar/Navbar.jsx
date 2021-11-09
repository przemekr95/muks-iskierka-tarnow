import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Strona Główna</a>
        </li>
        <li>
          <a href="https://www.facebook.com/MUKSIskierkaTarnow">Aktualności</a>
        </li>
        <li>
          <a href="/club">Klub</a>
        </li>
        <li>
          <a href="/team">Drużyna</a>
        </li>
        <li>
          <a href="/contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
