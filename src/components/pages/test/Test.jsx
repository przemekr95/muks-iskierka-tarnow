import React from 'react';
import Text from '../../common/typography/text';
import Heading from '../../common/typography/heading';
import './Test.scss';

function Test() {
  return (
    <section className="test-wrapper">
      <Text text="bonk" color="blue-text" size="ultra_ultra_small_size" />
      <Heading text="bonk" appearance="heading_1" />
    </section>
  );
}

export default Test;
