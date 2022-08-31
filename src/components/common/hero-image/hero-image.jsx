import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../atomic/image';
import Heading from '../../atomic/typography/heading';
import NextMatch from '../next-match/next-match';

import './hero-image.scss';

const HeroImage = props => {

  const {
    name,
    nextMatchInfo
  } = props;

  return (
    <section>
      <Image
        src="/assets/images/heroImage.jpg"
        alt="MUKS MUKS Iskierka Tarnów"
        className="hero-image"
      />
      <div className="hero-image-text">
        <Heading
          color="blue_text"
          appearance="heading_3"
          text={name}
          tag="h1"
        />
      </div>
      <div className="hero-image-next-match">
        <NextMatch nextMatchInfo={nextMatchInfo} />
      </div>
    </section>
  );
};

HeroImage.propTypes = {
  name: PropTypes.string.isRequired,
  nextMatchInfo: PropTypes.shape({
    'league': PropTypes.string,
    'home': PropTypes.string,
    'away': PropTypes.string,
    'date': PropTypes.string
  }).isRequired
};

export default HeroImage;
