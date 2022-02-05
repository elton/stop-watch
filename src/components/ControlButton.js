import PropTypes from 'prop-types';
import React from 'react';

const ControlButton = (props) => {
  const { activated, onStart, onPause, onSplit, onReset } = props;
  if (activated) {
    return (
      <div className='flex justify-center space-x-24 m-10'>
        <button
          onClick={onSplit}
          className='w-16 h-16 rounded-full border-[1px] border-zinc-300 text-zinc-700 font-bold'>
          计次
        </button>
        <button
          onClick={onPause}
          className='w-16 h-16 rounded-full border-[1px] border-zinc-300 text-zinc-700 font-bold'>
          停止
        </button>
      </div>
    );
  } else {
    return (
      <div className='flex justify-center space-x-24 m-10'>
        <button
          onClick={onReset}
          className='w-16 h-16 rounded-full border-[1px] border-zinc-300 text-zinc-700 font-bold'>
          复位
        </button>
        <button
          onClick={onStart}
          className='w-16 h-16 rounded-full border-[1px] border-zinc-300 text-zinc-700 font-bold'>
          启动
        </button>
      </div>
    );
  }
};

ControlButton.propTypes = {
  activated: PropTypes.bool,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ControlButton;
