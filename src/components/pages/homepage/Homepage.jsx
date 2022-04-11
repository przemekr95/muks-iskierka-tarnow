import React, { useState, useEffect } from 'react';
import NextMatch from '../../common/next-match';
import Schedule from '../../common/schedule';
import Sponsors from '../../common/sponsors';
import Heading from '../../common/typography/heading';
import Text from '../../common/typography/text';
import Image from '../../common/image';
import getData from '../../../utils/get-data';

import './homepage.scss';

function Homepage() {

  const [data, setData] = useState([]);
  useEffect(() => {
    getData('homepage.json', setData);
  }, []);

  const HomeInfo = () => (
    <div className="home-info">
      <Heading
        color="blue_text"
        appearance="heading_2_bold"
        text={data.headingOne}
        tag="h2"
      />
      <Text
        tag="p"
        text={data.homepageDescription}
        font="regular_font"
        size="regular_size"
        lineHeight="large_line"
      />
      <Image
        src="/assets/images/homepage.jpg"
        alt="Drużyna MUKS Iskierka Tarnów"
        className="home-image box-shadow"
      />
    </div>
  );

  const HomeSchedule = () => (
    <div className="home-schedule">
      <div className="next-match">
        <NextMatch />
      </div>
      <div className="schedule">
        <Schedule />
      </div>
    </div>
  );

  return (
    <div className="wrapper">
      <section className="column wrapper-page">
        <div className="row">
          <HomeInfo />
          <HomeSchedule />
        </div>
        <Sponsors />
      </section>
    </div>
  );
}

export default Homepage;
