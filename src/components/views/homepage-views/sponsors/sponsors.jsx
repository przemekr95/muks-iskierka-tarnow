import React, { useState, useEffect } from 'react';
import Heading from '../../../atomic/typography/heading';
import Carousel from '../../../common/carousel';
import getData from '../../../../utils/get-data';

import './sponsors.scss';

const Sponsors = () => {

  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    getData('sponsors.json', setSponsors);
  }, []);

  return (
    <div className="wrapper-sponsors">
      <Heading
        color="blue_text"
        appearance="heading_3"
        text="Sponsorzy"
        tag="h3"
      />
      <Carousel items={sponsors.sponsors} />
    </div>
  );
};

export default Sponsors;
