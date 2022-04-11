import React from 'react';
import Heading from '../../common/typography/heading';
import Carousel from '../../common/carousel';

import './sponsors.scss';

const Sponsors = () => {
  // ##TODO dac do public
  const items = [
    { id: 1, src: '/assets/sponsors/grubcio.png', alt: 'Logo Grubcio', link: 'http://grubcio.com.pl/' },
    { id: 2, src: '/assets/sponsors/marju.png', alt: 'Logo Marju', link: 'https://www.marju.pl/' },
    { id: 3, src: '/assets/sponsors/megael.jpg', alt: 'Logo Megael', link: 'http://www.megael.pl/' },
    { id: 4, src: '/assets/sponsors/mpec.png', alt: 'Logo MPEC', link: 'https://mpec.tarnow.pl/' },
    { id: 5, src: '/assets/sponsors/mzps.png', alt: 'Logo MZPS', link: 'http://www.mzps.pl/' },
    { id: 6, src: '/assets/sponsors/tarnow.png', alt: 'Logo Tarnowa', link: 'https://tarnow.pl/' },
    { id: 7, src: '/assets/sponsors/tw.png', alt: 'Logo Tarnowskie Wodociągi', link: 'https://www.tw.tarnow.pl/' },
    { id: 8, src: '/assets/sponsors/zmt.png', alt: 'Logo ZMT', link: 'https://www.zmt.tarnow.pl/wordpress/' },

  ];
  return (
    <div className="wrapper-sponsors">
      <Heading
        color="blue_text"
        appearance="heading_3"
        text="Sponsorzy"
        tag="h3"
      />
      <Carousel items={items} />
    </div>
  );
};

export default Sponsors;
