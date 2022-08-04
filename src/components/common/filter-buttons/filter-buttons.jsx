import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atomic/button';

import './filter-buttons.scss';

const FilterButtons = props => {
  const {
    filter,
    buttons
  } = props;

  return (
    <>
      {
        buttons.map((cat, index) => (
          <Button
            className="filter-button"
            key={index}
            text={cat}
            appearance="primary"
            corner="round"
            onClick={() => filter(cat)}
          />
        ))
      }
    </>
  );
};

FilterButtons.propTypes = {
  filter: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default FilterButtons;
