import React from 'react';
import PropTypes from 'prop-types';
import LastMatch from '../../common/last-match/last-match';

import './last-match-content.scss';

const LastMatchContent = props => {
  const {
    title
  } = props;
  console.log(title);

  return <LastMatch />;
};

LastMatchContent.propTypes = {
  title: PropTypes.string,
};

LastMatchContent.defaultProps = {
  title: '',
};

export default LastMatchContent;
