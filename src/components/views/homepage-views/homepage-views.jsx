import React from 'react';
import PropTypes from 'prop-types';
import HeroImage from '../../common/hero-image';
import HomePageLayout from '../../common/home-page-layout';
import Sponsors from './sponsors';
import FirstRowHomepage from './first-row-homepage';
import SecondRowHomepage from './second-row-homepage';
import ThirdRowHomepage from './third-row-homepage';

import './homepage-views.scss';

const HomepageViews = props => {
  const {
    homepageTexts,
    nextMatchInfo
  } = props;

  const firstRow =
    <FirstRowHomepage
      title={homepageTexts.headingOne}
      description={homepageTexts.homepageDescription}
    />;

  const secondRow =
    <SecondRowHomepage
      title={homepageTexts.headingTwo}
    />;

  const thirdRow =
    <ThirdRowHomepage
      title={homepageTexts.headingThree}
    />;


  const imagesList = [
    [1, 'homepage-1.jpg', 'Drużyna MUKS Iskierka Tarnów', firstRow],
    [2, 'homepage-2.jpg', 'Drużyna MUKS Iskierka Tarnów', secondRow],
    [3, 'homepage-3.jpg', 'Drużyna MUKS Iskierka Tarnów', thirdRow]
  ];

  return (
    <>
      <HeroImage
        name={homepageTexts.name}
        secondName={homepageTexts.secondName}
        nextMatchInfo={nextMatchInfo} />
      <HomePageLayout imagesList={imagesList} />
      <section className="column wrapper-page">
        <Sponsors />
      </section>
    </>
  );
};

HomepageViews.propTypes = {
  homepageTexts: PropTypes.shape({
    'name': PropTypes.string,
    'secondName': PropTypes.string,
    'homepageDescription': PropTypes.string,
    'headingOne': PropTypes.string,
    'headingTwo': PropTypes.string,
    'headingThree': PropTypes.string,
    'nextMatchInfo': PropTypes.string,
  }).isRequired,
  nextMatchInfo: PropTypes.shape({
    'league': PropTypes.string,
    'home': PropTypes.string,
    'away': PropTypes.string,
    'date': PropTypes.string
  }).isRequired
};

export default HomepageViews;
