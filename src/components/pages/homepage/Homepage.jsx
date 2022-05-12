import React from 'react';
import Sponsors from '../../views/sponsors';
import HomePageContent from '../../views/home-page-content';

import './homepage.scss';

function Homepage() {

  return (
    <>
      <HomePageContent />
      <section className="column wrapper-page">
        <Sponsors />
      </section>
    </>
  );
}

export default Homepage;
