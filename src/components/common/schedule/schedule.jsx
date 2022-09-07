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
      <tr key={item.id} className="row team-schedule team-schedule-border">
        <td data-label="Date" className="schedule-date">
          <Text
            text={item.date}
            color="blue-dark_text"
            font="bold_font"
            size="extra_small_size"
          />
        </td>
        <td data-label="Matches" className="column">
          <div className="team-schedule">
            <div className="team-schedule-name text-left">
              <Text
                text={item.home}
                color="grey_text"
                font="regular_font"
                size="extra_small_size"
              />
            </div>
            <div className="schedule-logo-box">
              <Image
                src={item.homeLogo}
                alt={item.homeLogoAlt}
                className="schedule-logo"
              />
            </div>
          </div>
          <div className="team-schedule">
            <div className="team-schedule-name text-left">
              <Text
                text={item.away}
                color="black_text"
                font="regular_font"
                size="extra_small_size"
              />
            </div>
            <div className="schedule-logo-box">
              <Image
                src={item.awayLogo}
                alt={item.awayLogoAlt}
                className="schedule-logo"
              />
            </div>
          </div>
        </td>
      </tr>
    ))
  );

  return (
    <table className="schedule-wrapper">
      <tbody className="center">
        {tableSchedule}
      </tbody>
    </table>
  );
};

export default Schedule;
