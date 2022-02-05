import PropTypes from 'prop-types';
import React from 'react';

const ControlButton = (props) => {
  return <div></div>;
};

ControlButton.propTypes = {
  activated: PropTypes.bool,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ControlButton;
