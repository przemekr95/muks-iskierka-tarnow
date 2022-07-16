import React from 'react';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../../atomic/typography/heading';
import Button from '../../../atomic/button';

import './club-download.scss';

const ClubDownload = () => {

  const downloadButtonsContent = [
    {
      'name': 'Statut',
      'link': 'www.google.com'
    },
    {
      'name': 'Regulamin',
      'link': 'www.google.com'
    },
    {
      'name': 'Regulamin składek',
      'link': 'www.google.com'
    },
    {
      'name': 'Deklaracja członkowska',
      'link': 'www.google.com'
    },
    {
      'name': 'Oświadczenie zawodnika',
      'link': 'www.google.com'
    },
    {
      'name': 'Logo',
      'link': 'www.google.com'
    }
  ];

  const downloadButtons = downloadButtonsContent.map((item, index) => (
    <li key={index}>
      <Button
        text={item.name}
        link={item.link}
        appearance="primary"
        corner="round"
        className="download-button"
        icon={faFileDownload}
      />
    </li>
  ));

  const downloadButtonsList = (
    <ul className="download-button-wrapper">
      {downloadButtons}
    </ul>
  );

  return (
    <section className="center">
      <Heading
        text="Do pobrania"
        appearance="heading_2_bold"
        color="blue_text"
        tag="h2"
      />
      {downloadButtonsList}
    </section>
  );
};

export default ClubDownload;
