import React from 'react';
import Nextmetch from '../../common/nextmatch';
import Schedule from '../../common/schedule';
import Sponsors from '../../common/sponsors';

import './Homepage.scss';

function Homepage() {
  return (
    <div className="wrapper">
      <section className="wrapper_home">
        <div className="row">
          <div className="home_info">a</div>
          <div className="home_schedule">
            <div className="next_match">
              <Nextmetch />
            </div>
            <div className="schedule">
              <Schedule />
            </div>
          </div>
        </div>
        <Sponsors />
      </section>
    </div>
  );
}

export default Homepage;
