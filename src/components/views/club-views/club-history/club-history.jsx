import React from 'react';
import Heading from '../../../atomic/typography/heading';
import Text from '../../../atomic/typography/text';
import Image from '../../../atomic/image';

import './club-history.scss';

const ClubHistory = () => {

  const imgURL = '/assets/images/team.jpg';
  const text = 'Międzyszkolny Uczniowski Klub Sportowy Iskierka Tarnów, został założony 22 czerwca 1994 roku przez grupę miłośników aktywnego spędzania czasu wolnego – nauczycieli Szkoły Podstawowej nr 14 w Tarnowie. Klub wpisany jest do ewidencji stowarzyszeń sportowych m. Tarnowa pod numerem WSP.4221.2.1.2015 Pierwszym miejscem jego działalności była Szkoła Podstawowa nr 14 przy ul. Krzyskiej 118 w Tarnowie, gdzie prowadzona była sekcja szermierki. Na przestrzeni kolejnych lat w Klubie powstawała sekcja piłki siatkowej chłopców, jednak w wyniku ogromnego zainteresowania piłką siatkową władze MUKS Iskierki Tarnów podjęły strategiczną decyzję o skupieniu się na szkoleniu młodych adeptów tylko i wyłącznie tej dyscypliny sportu. MUKS Iskierka Tarnów od kilku lat prowadzi szkolenie we wszystkich grupach rocznikowych dzieci oraz młodzieży (chłopcy), począwszy od mini siatkówki, poprzez młodzików, kadetów aż po juniorów. Wszystkie grupy młodzieżowe są zgłaszone do oficjalnych rozgrywek MZPS. Dodatkowo w 2012 roku w Klubie powstała drużyna męska seniorów, która obecnie występuje w I lidze MZPS. Poza działalnością szkoleniową, MUKS Iskierka Tarnów angażuje się również w organizację różnorodnych imprez sportowych, obozów jak i akcji charytatywnych.';

  return (
    <section className="center club-history">
      <Heading
        text="Historia"
        appearance="heading_2_bold"
        color="blue_text"
        tag="h2"
      />
      <Text
        tag="p"
        text={text}
        font="regular_font"
        size="regular_size"
        lineHeight="large_line"
      />
      <Image
        src={imgURL}
        alt="MUKS MUKS Iskierka Tarnów"
        className="history-image"
      />
    </section>
  );
};

export default ClubHistory;
