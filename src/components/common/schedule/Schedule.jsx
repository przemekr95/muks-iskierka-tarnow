import React from 'react';
import Text from '../typography/text';
import Heading from '../typography/heading';

import './Schedule.scss';

const Schedule = () => (
  <div className="nextmatch_wrapper boxShadow">
    <Heading
      color="blue_text"
      appearance="heading_3"
      text="Terminarz"
      tag="h3"
    />
    <Text
      text="Terminarz"
      color="black_text"
      font="regular_font"
    />
  </div>
);

export default Schedule;
