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

FilterButtons.defaultProps = {
  filter: PropTypes.shape(
    [{
      'name': '',
      'position': '',
      'category': '',
      'img': ''
    }]
  ),
  buttons: PropTypes.shape(
    [{
      'name': '',
      'position': '',
      'category': '',
      'img': ''
    }]
  )
};

FilterButtons.propTypes = {
  filter: PropTypes.shape([{
    'name': PropTypes.string.isRequired,
    'position': PropTypes.string.isRequired,
    'category': PropTypes.string.isRequired,
    'img': PropTypes.string.isRequired
  }]),
  buttons: PropTypes.shape(
    [{
      'name': '',
      'position': '',
      'category': '',
      'img': ''
    }]
  )
};

export default FilterButtons;
