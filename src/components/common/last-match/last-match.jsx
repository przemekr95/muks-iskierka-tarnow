import React, { useState, useEffect } from 'react';
import Text from '../../atomic/typography/text';
import Heading from '../../atomic/typography/heading';
import Image from '../../atomic/image/image';
import getData from '../../../utils/get-data';

import './last-match.scss';

const LastMatch = () => {

  const [lastMatch, setLastMatch] = useState({
    'home': '',
    'homeLogo': '',
    'homeLogoAlt': '',
    'away': '',
    'awayLogo': '',
    'awayLogoAlt': '',
    'date': '',
    'homeSet': '',
    'awaySet': '',
    'points': [
      '',
      '',
      '',
      '',
      ''
    ]
  });

  useEffect(() => {
    getData('last-match.json', setLastMatch);
  }, []);

  const countPoints = lastMatch.points ? lastMatch.points : [];
  const countSet = `${lastMatch.homeSet} - ${lastMatch.awaySet}`;

  const points = (
    countPoints.map((countPoint, index) => (
      <span key={index} className="points-wrapper">
        <Text
          text={countPoint}
          color="black_text"
          font="regular_font"
          size="extra_large_size"
          tag="p"
        />
      </span>
    ))
  );

  return (
    <div className="last-match-wrapper">

      <Image
        src={lastMatch.homeLogo}
        alt={lastMatch.homeLogoAlt}
        className="last-match-logo"
      />

      <div className="column">
        <Heading
          text={countSet}
          appearance="heading_3_large"
          color="blue_text"
          tag="h3"
        />
        <Text
          text={points}
          color="black_text"
          font="thin_font"
          size="small_size"
        />
        <Text
          text={lastMatch.date}
          color="black_text"
          font="thin_font"
          size="small_size"
        />
      </div>

      <Image
        src={lastMatch.awayLogo}
        alt={lastMatch.awayLogoAlt}
        className="last-match-logo"
      />

    </div>
  );
};

export default LastMatch;
