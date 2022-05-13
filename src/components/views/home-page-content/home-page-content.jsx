import React from 'react';
import PropTypes from 'prop-types';
import HomePageLayout from '../../common/home-page-layout/home-page-layout';
import FirstRowHomePage from '../first-row-home-page/first-row-home-page';
import SecondRowHomePage from '../second-row-home-page/second-row-home-page';
import ThirdRowHomePage from '../third-row-home-page/third-row-home-page';

import './home-page-content.scss';

const HomePageContent = props => {
  const {
    homepageTexts
  } = props;

  const firstRow =
    <FirstRowHomePage
      title={homepageTexts.headingOne}
      description={homepageTexts.homepageDescription}
    />;

  const secondRow =
    <SecondRowHomePage
      title={homepageTexts.headingTwo}
    />;

  const thirdRow =
    <ThirdRowHomePage
      title={homepageTexts.headingThree}
    />;


  const imagesList = [
    [1, 'homepage-1.jpg', 'Drużyna MUKS Iskierka Tarnów', firstRow],
    [2, 'homepage-2.jpg', 'Drużyna MUKS Iskierka Tarnów', secondRow],
    [3, 'homepage-3.jpg', 'Drużyna MUKS Iskierka Tarnów', thirdRow]
  ];

  return (
    <div>
      <HomePageLayout imagesList={imagesList} />
    </div>
  );
};

HomePageContent.propTypes = {
  homepageTexts: PropTypes.objectOf(PropTypes.string),
};

HomePageContent.defaultProps = {
  homepageTexts: {},
};

export default HomePageContent;
