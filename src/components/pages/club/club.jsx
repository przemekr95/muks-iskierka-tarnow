import React from 'react';

import ClubViews from '../../views/club-views';

import './club.scss';

function Club() {
  return (
    <div className="wrapper">
      <section className="wrapper-page column">
        <ClubViews />
      </section>
    </div>
  );
}

export default Club;
