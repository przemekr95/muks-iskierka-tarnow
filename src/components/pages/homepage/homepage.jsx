import React, { useState, useEffect } from 'react';
import getData from '../../../utils/get-data';
import Sponsors from '../../views/homepage-views/sponsors';
import HomepageContent from '../../views/homepage-views/homepage-content';
import HeroImage from '../../common/hero-image';

import './homepage.scss';

const Homepage = () => {
  const [homepageTexts, setHomepageTexts] = useState({});

  useEffect(() => {
    getData('homepage.json', setHomepageTexts);
  }, []);

  return (
    <>
      <HeroImage name={homepageTexts.name} />
      <HomepageContent homepageTexts={homepageTexts} />
      <section className="column wrapper-page">
        <Sponsors />
      </section>
    </>
  );
};

export default Homepage;
