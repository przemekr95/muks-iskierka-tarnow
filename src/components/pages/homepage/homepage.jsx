import React, { useState, useEffect } from 'react';
import getData from '../../../utils/get-data';
import HomepageViews from '../../views/homepage-views';

import './homepage.scss';

const Homepage = () => {
  const [homepageTexts, setHomepageTexts] = useState({
    'name': '',
    'homepageDescription': '',
    'headingOne': '',
    'headingTwo': '',
    'headingThree': ''
  });
  const [nextMatchInfo, setNextMatchInfo] = useState({
    'league': '',
    'home': '',
    'away': '',
    'date': ''
  });

  useEffect(() => {
    getData('homepage.json', setHomepageTexts);
    getData('next-match.json', setNextMatchInfo);
  }, []);

  return (
    <HomepageViews homepageTexts={homepageTexts} nextMatchInfo={nextMatchInfo} />
  );
};

export default Homepage;
