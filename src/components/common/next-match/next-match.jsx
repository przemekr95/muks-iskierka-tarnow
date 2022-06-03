import React from 'react';
import Text from '../../atomic/typography/text';

import './next-match.scss';

const NextMatch = () => (
  <div className="next-match-container">
    <div className="next-match-container-bar">
      <Text
        text="2. Liga Małopolska"
        color="white_text"
        font="thin_font"
      />
    </div>
    <div className="next-match-content">

      <div className="column">
        <Text
          text="MUKS Iskierka Tarnów"
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
          text="Sokół Gumniska Tarnów"
          color="white_text"
          font="regular_font"
          size="regular_size"
        />
      </div>

      <div className="countdown-box">
        <div className="countdown">
          <div className="countdown-number">
            <Text
              text="03"
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
              text="12"
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
              text="59"
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
              text="43"
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

export default NextMatch;
