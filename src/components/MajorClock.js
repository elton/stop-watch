import padStart from 'lodash/padStart';
import PropTypes from 'prop-types';
import React from 'react';

const ms2Time = (milliseconds) => {
  let time = milliseconds;
  const ms = milliseconds % 1000;
  time = (milliseconds - ms) / 1000;
  const seconds = time % 60;
  time = (time - seconds) / 60;
  const minutes = time % 60;
  const hours = (time - minutes) / 60;

  const result =
    padStart(hours, 2, '0') +
    ':' +
    padStart(minutes, 2, '0') +
    ':' +
    padStart(seconds, 2, '0') +
    '.' +
    padStart(ms, 3, '0');
  return result;
};

const MajorClock = ({ milliseconds = 0 }) => {
  return (
    <div className='font-mono text-center'>
      {ms2Time(milliseconds)}
    </div>
  );
};

MajorClock.propTypes = {
  milliseconds: PropTypes.number.isRequired,
};

export default MajorClock;
