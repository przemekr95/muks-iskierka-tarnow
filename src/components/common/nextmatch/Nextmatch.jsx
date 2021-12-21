import React from 'react';
import Text from '../typography/text';
import Heading from '../typography/heading';

import './Nextmatch.scss';

const Nextmatch = () => (
  <div className="nextmatch_wrapper boxShadow">
    <Heading
      color="blue_text"
      appearance="heading_3"
      text="Następny mecz"
      tag="h3"
    />
    <Text
      text="Następny mecz"
      color="black_text"
      font="regular_font"
    />
  </div>
);

export default Nextmatch;
