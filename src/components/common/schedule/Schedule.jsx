import React, { useState, useEffect } from 'react';
import Text from '../typography/text';
import Image from '../image/image';
import getData from '../../../utils/get-data';

import './schedule.scss';

const Schedule = () => {

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    getData('schedule.json', setSchedule);
  }, []);

  const items = schedule.schedule ? schedule.schedule : [];

  const tableSchedule = (
    items.map(item => (
      <tr key={item.id} className="row team-schedule">
        <td data-label="Date">
          <Text
            text={item.date}
            color="black_text"
            font="regular_font"
          />
        </td>
        <td data-label="Home" className="team-schedule">
          <Image
            src={item.homeLogo}
            alt={item.homeLogoAlt}
            className="schedule-logo"
          />
          <Text
            text={item.home}
            color="black_text"
            font="regular_font"
          />
        </td>
        <td data-label="VS">vs</td>
        <td data-label="Away" className="team-schedule">
          <Text
            text={item.away}
            color="black_text"
            font="regular_font"
          />
          <Image
            src={item.awayLogo}
            alt={item.awayLogoAlt}
            className="schedule-logo"
          />
        </td>
      </tr>
    ))
  );

  return (
    <table className="schedule-wrapper">
      <tbody>
        {tableSchedule}
      </tbody>
    </table>
  );
};

export default Schedule;
