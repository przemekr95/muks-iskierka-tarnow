import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../../atomic/image';

import './home-page-layout.scss';

const HomePageLayout = props => {
  const {
    imagesList
  } = props;

  const [layout, setLayout] = useState('');

  const changeLayout = () => {
    if (document.documentElement.clientWidth >= 991) {
      setLayout('row');
    } else {
      setLayout('column');
    }
  };

  useEffect(() => {
    changeLayout();
    window.addEventListener('resize', changeLayout);
  });

  const listElement = imagesList.map((item, index) => (
    <li className={item[0] % 2 === 0 ? `${layout}` : `${layout}-reverse`} key={index}>
      <Image
        src={`/assets/images/${item[1]}`}
        alt={item[2]}
        className="home-page-layout-container home-page-layout-img"
      />
      <div className="home-page-layout-container home-page-layout-text center">
        {item[3]}
      </div>
    </li>
  ));

  return (
    <section className="home-page-layout">
      <ul>
        {listElement}
      </ul>
    </section>
  );
};

HomePageLayout.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default HomePageLayout;
