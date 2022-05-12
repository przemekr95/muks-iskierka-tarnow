import React from 'react';
import HomePageLayout from '../../common/home-page-layout/home-page-layout';

import './home-page-content.scss';

const HomePageContent = () => {

  const test = <h1>tests</h1>;

  const imagesList = [
    [1, 'homepage-1.jpg', 'Drużyna MUKS Iskierka Tarnów', test],
    [2, 'homepage-2.jpg', 'Drużyna MUKS Iskierka Tarnów', test],
    [3, 'homepage-3.jpg', 'Drużyna MUKS Iskierka Tarnów', test]
  ];

  return (
    <div>
      <HomePageLayout imagesList={imagesList} />
    </div>
  );
};

export default HomePageContent;
