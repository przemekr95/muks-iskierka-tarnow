import React from 'react';
import PropTypes from 'prop-types';
import ElasticCarousel from 'react-elastic-carousel';
import Image from '../image';

import './carousel.scss';

const Carousel = props => {

  const {
    items,
  } = props;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 992, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <ElasticCarousel className="carousel-wrapper" breakPoints={breakPoints} itemsToScroll={1}>
      {items.map(item => (
        <a href={item.link} key={item.id} target="_blank">
          <Image
            src={item.src}
            alt={item.alt}
            className="sponsor-logo"
          />
        </a>
      ))}
    </ElasticCarousel>
  );
};
Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Carousel.defaultProps = {
  items: []
};

export default Carousel;
