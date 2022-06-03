import React from 'react';
import PropTypes from 'prop-types';
import HomePageLayout from '../../../common/home-page-layout';
import FirstRowHomepage from '../first-row-homepage';
import SecondRowHomepage from '../second-row-homepage';
import ThirdRowHomepage from '../third-row-homepage';

import './homepage-content.scss';

const HomepageContent = props => {
  const {
    homepageTexts
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
      <HomePageLayout imagesList={imagesList} />
    </>
  );
};

HomepageContent.propTypes = {
  homepageTexts: PropTypes.objectOf(PropTypes.string),
};

HomepageContent.defaultProps = {
  homepageTexts: {},
};

export default HomepageContent;
