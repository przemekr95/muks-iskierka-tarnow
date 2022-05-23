import React from 'react';
import PropTypes from 'prop-types';
import Image from '../image';

import './home-page-layout.scss';

const HomePageLayout = props => {
  const {
    imagesList
  } = props;

  const clientWidth = document.documentElement.clientWidth;
  const isRow = clientWidth > 991 ? 'row' : 'column';

  const listElement = imagesList.map(item => (
    <li className={item[0] % 2 === 0 ? isRow : `${isRow}-reverse`} key={item[0]}>
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
    <section>
      <ul>
        {listElement}
      </ul>
    </section>
  );
};

HomePageLayout.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.array),
};

HomePageLayout.defaultProps = {
  imagesList: 'PropTypes.string',
};

export default HomePageLayout;
