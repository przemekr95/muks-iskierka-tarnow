import React, { useState, useEffect } from 'react';
import getData from '../../../utils/get-data';
import Sponsors from '../../views/sponsors';
import HomePageContent from '../../views/home-page-content';
import HeroImage from '../../common/hero-image/hero-image';

import './homepage.scss';


const Homepage = () => {
  const [homepageTexts, setHomepageTexts] = useState({});

  useEffect(() => {
    getData('homepage.json', setHomepageTexts);
  }, []);

  return (
    <>
      <HeroImage name={homepageTexts.name} />
      <HomePageContent homepageTexts={homepageTexts} />
      <section className="column wrapper-page">
        <Sponsors />
      </section>
    </>
  );
};

export default Homepage;
