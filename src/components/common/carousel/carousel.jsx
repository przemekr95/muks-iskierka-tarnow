import React from 'react';
import PropTypes from 'prop-types';
import ElasticCarousel from 'react-elastic-carousel';
import Image from '../../atomic/image';

import './carousel.scss';

const Carousel = props => {

  const {
    items,
  } = props;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2 },
    { width: 992, itemsToShow: 3 },
  ];

  return (
    <ElasticCarousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000}>
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
