import React, { useState, useEffect } from 'react';
import Text from '../../atomic/typography/text';
import Image from '../../atomic/image';
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
        <td data-label="Date" className="schedule-date">
          <Text
            text={item.date}
            color="light_grey_text"
            font="regular_font"
          />
        </td>
        <td data-label="Home" className="team-schedule team-schedule-box">
          <div className="team-schedule-name text-left">
            <Text
              text={item.home}
              color="black_text"
              font="regular_font"
            />
            <Text
              text={item.homeCity}
              color="blue_text"
              font="bold_font"
            />
          </div>
          <div className="schedule-logo-box">
            <Image
              src={item.homeLogo}
              alt={item.homeLogoAlt}
              className="schedule-logo"
            />
          </div>
        </td>
        <td data-label="VS">
          <Text
            text="vs"
            color="black_text"
            font="regular_font"
          />
        </td>
        <td data-label="Away" className="team-schedule team-schedule-box">
          <div className="schedule-logo-box">
            <Image
              src={item.awayLogo}
              alt={item.awayLogoAlt}
              className="schedule-logo"
            />
          </div>
          <div className="team-schedule-name text-right">
            <Text
              text={item.away}
              color="black_text"
              font="regular_font"
            />
            <Text
              text={item.awayCity}
              color="blue_text"
              font="bold_font"
            />
          </div>
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
