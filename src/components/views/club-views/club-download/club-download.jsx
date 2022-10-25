import React from 'react';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../../atomic/typography/heading';
import Button from '../../../atomic/button';

import Logo from './assets/iskierkaLogo.png';
import DeklaracjaCzłonkowska from './assets/deklaracjaCzłonkowska.docx';
import OświadczenieZawodnika from './assets/oświadczenieZawodnika.docx';
import PrawaIObowiązki from './assets/prawaIObowiązki.pdf';
import StatutMuksIskierkaTarnów from './assets/statutMuksIskierkaTarnów.pdf';
import RegulaminSkladekCzlonkowskich from './assets/RegulaminSkladekCzlonkowskich.pdf';

import './club-download.scss';

const ClubDownload = () => {

  const downloadButtonsContent = [
    {
      'name': 'Statut',
      'link': StatutMuksIskierkaTarnów
    },
    {
      'name': 'Regulamin',
      'link': PrawaIObowiązki
    },
    {
      'name': 'Regulamin składek',
      'link': RegulaminSkladekCzlonkowskich
    },
    {
      'name': 'Deklaracja członkowska',
      'link': DeklaracjaCzłonkowska
    },
    {
      'name': 'Oświadczenie zawodnika',
      'link': OświadczenieZawodnika
    },
    {
      'name': 'Logo',
      'link': Logo
    }
  ];

  const downloadButtons = downloadButtonsContent.map((item, index) => (
    <li key={index}>
      <a
        href={item.link}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          text={item.name}
          appearance="primary"
          corner="round"
          className="download-button"
          icon={faFileDownload}
        />
      </a>
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
