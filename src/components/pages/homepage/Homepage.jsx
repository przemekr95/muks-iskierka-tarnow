import React from 'react';
import NextMatch from '../../common/next-match';
import Schedule from '../../common/schedule';
import Sponsors from '../../views/sponsors';
import Heading from '../../common/typography/heading';
import Text from '../../common/typography/text';
import Image from '../../common/image';

import './homepage.scss';

function Homepage() {

  const HomeInfo = () => (
    <div className="home-info">
      <Heading
        color="blue_text"
        appearance="heading_2_bold"
        text="Nasza drużyna"
        tag="h2"
      />
      <Text
        tag="p"
        text="Międzyszkolny Uczniowski Klub Sportowy Iskierka Tarnów to blisko 27 lat tradycji! Został założony 22 czerwca 1994 roku. Dziś dzięki przychylności władz Miasta Tarnowa nasz klub prężnie rozwija się szczególnie pod kątem siatkarskim. Prowadzimy szkolenie w różnych grupach rocznikowych dzieci, młodzieży oraz dorosłych, począwszy od mini siatkówki, poprzez młodzików, kadetów i juniorów, aż po grupę seniorów. Wszystkie grupy szkoleniowe są zgłoszone do oficjalnych rozgrywek MZPS. Łączy nas pasja do sportu! Zachęcamy wszystkich do współtworzenia naszej społeczności, dla której liczy się sport i rywalizacja. Zapraszamy do kibicowania naszym zawodnikom."
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
