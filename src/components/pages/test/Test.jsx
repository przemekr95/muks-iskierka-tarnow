import React from 'react';
import Image from '../../common/image/Image';

import './Test.scss';

function Test() {
  return (
    <section className="test-wrapper">
      <Image src="/assets/iskierkaLogo.png" alt="Logo MUKS Iskierka Tarnów" className="header-logo" />
    </section>
  );
}

export default Test;
