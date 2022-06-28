import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from '../../atomic/typography/text';

import './next-match.scss';

const NextMatch = props => {

  const {
    nextMatchInfo
  } = props;

  const defaultTimeLeft = {
    textDay: 0,
    textHour: 0,
    textMinute: 0,
    textSecond: 0
  };

  const [timeLeft, setTimeLeft] = useState(defaultTimeLeft);

  const countDate = new Date(nextMatchInfo?.date).getTime();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDate - now;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      setTimeLeft({
        textDay: textDay, // eslint-disable-line
        textHour: textHour, // eslint-disable-line
        textMinute: textMinute, // eslint-disable-line
        textSecond: textSecond // eslint-disable-line
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nextMatchContent = (
    <div className="next-match-container">
      <div className="next-match-container-bar">
        <Text
          text={nextMatchInfo?.league}
          color="white_text"
          font="thin_font"
        />
      </div>
      <div className="next-match-content">

        <div className="column m10">
          <Text
            text={nextMatchInfo?.home}
            color="white_text"
            font="regular_font"
            size="regular_size"
          />
          <Text
            text="vs"
            color="light_grey_text"
            font="thin_font"
            size="small_size"
          />
          <Text
            text={nextMatchInfo?.away}
            color="white_text"
            font="regular_font"
            size="regular_size"
          />
        </div>

        <div className="countdown-box">
          <div className="countdown">
            <div className="countdown-number">
              <Text
                text={timeLeft.textDay}
                color="yellow_text"
                font="bold_font"
                size="extra_large_size"
              />
            </div>
            <div className="countdown-text">
              <Text
                text="Dni"
                color="light_grey_text"
                font="thin_font"
                size="small_size"
              />
            </div>
          </div>
          <div className="countdown">
            <div className="countdown-number">
              <Text
                text={timeLeft.textHour}
                color="yellow_text"
                font="bold_font"
                size="extra_large_size"
              />
            </div>
            <div className="countdown-text">
              <Text
                text="Godzin"
                color="light_grey_text"
                font="thin_font"
                size="small_size"
              />
            </div>
          </div>
          <div className="countdown">
            <div className="countdown-number">
              <Text
                text={timeLeft.textMinute}
                color="yellow_text"
                font="bold_font"
                size="extra_large_size"
              />
            </div>
            <div className="countdown-text">
              <Text
                text="Minut"
                color="light_grey_text"
                font="thin_font"
                size="small_size"
              />
            </div>
          </div>
          <div className="countdown">
            <div className="countdown-number">
              <Text
                text={timeLeft.textSecond}
                color="yellow_text"
                font="bold_font"
                size="extra_large_size"
              />
            </div>
            <div className="countdown-text">
              <Text
                text="Sekund"
                color="light_grey_text"
                font="thin_font"
                size="small_size"
              />
            </div>
          </div>
        </div>

        <div className="next-match-location">
          <Text
            text="Traugutta 5A, Tarnów"
            color="light_grey_text"
            font="thin_font"
            size="extra_small_size"
          />
        </div>

      </div>
    </div>
  );

  const isNextMatch = timeLeft.textSecond > -1 ? nextMatchContent : null;

  return (
    isNextMatch
  );
};

NextMatch.propTypes = {
  nextMatchInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};

NextMatch.defaultProps = {
  nextMatchInfo: {
    'league': '2. Liga Małopolska',
    'home': 'Tarnów',
    'away': 'Tarnów',
    'date': 'Nov 01, 2022 20:00:00'
  }
};

export default NextMatch;
