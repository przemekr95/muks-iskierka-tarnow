import React from 'react';
import Heading from '../../../atomic/typography/heading';
import CardManagement from '../../../common/card-management';

import './club-management.scss';

const ClubManagement = () => {
  const clubManagementContent = [
    {
      'img': '/assets/images/trener.jpg',
      'name': 'Andrzej Łoś',
      'title': 'Prezes Klubu'
    },
    {
      'img': '/assets/images/trener.jpg',
      'name': 'Sebastian Mruk',
      'title': 'Wiceprezes Klubu'
    },
    {
      'img': '/assets/images/trener.jpg',
      'name': 'Dariusz Kuta',
      'title': 'Sekretarz Klubu'
    },
    {
      'img': '/assets/images/trener.jpg',
      'name': 'Bożena Janiec',
      'title': 'Pełnomocnik Zarządu'
    }
  ];

  const managementCard = clubManagementContent.map((item, index) => (
    <li key={index}>
      <CardManagement
        img={item.img}
        title={item.title}
        name={item.name}
      />
    </li>
  ));

  const managementCardList = (
    <ul className="management-card-wrapper">
      {managementCard}
    </ul>
  );

  return (
    <section className="center">
      <Heading
        text="Zarząd"
        appearance="heading_2_bold"
        color="blue_text"
        tag="h2"
      />
      {managementCardList}
    </section>
  );
};

export default ClubManagement;
