import React, { useState, useEffect } from 'react';
import Text from '../../atomic/typography/text';
import Heading from '../../atomic/typography/heading';
import Image from '../../atomic/image/image';
import getData from '../../../utils/get-data';

import './last-match.scss';

const LastMatch = () => {

  const [lastMatch, setLastMatch] = useState([]);

  useEffect(() => {
    getData('last-match.json', setLastMatch);
  }, []);

  const items = lastMatch.lastMatch ? lastMatch.lastMatch[0] : [];
  const countPoints = items.points ? items.points : [];
  const countSet = `${items.homeSet} - ${items.awaySet}`;

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
        src={items.homeLogo}
        alt={items.homeLogoAlt}
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
          text={items.date}
          color="black_text"
          font="thin_font"
          size="small_size"
        />
      </div>

      <Image
        src={items.awayLogo}
        alt={items.awayLogoAlt}
        className="last-match-logo"
      />

    </div>
  );
};

export default LastMatch;
