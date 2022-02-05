import { useEffect, useState } from 'react';
import ControlButton from './ControlButton';
import MajorClock from './MajorClock';
import SplitTime from './SplitTime';

const StopWatch = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [splits, setSplits] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isStarted && !isPaused) {
      interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000 / 60);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isStarted, isPaused]);

  const onStart = () => {
    setIsStarted(true);
    setIsPaused(false);
    setStartTime(new Date());
    setCurrentTime(new Date());
  };

  const onPause = () => {
    setIsPaused(!isPaused);
    setIsStarted(false);
  };

  const onReset = () => {
    setStartTime(null);
    setCurrentTime(null);
    setIsStarted(false);
    setSplits([]);
  };

  const onSplit = () => {
    setSplits([...splits, currentTime - startTime]);
  };

  return (
    <div>
      <MajorClock milliseconds={currentTime - startTime} />
      <ControlButton
        activated={isStarted}
        onSplit={onSplit}
        onStart={onStart}
        onPause={onPause}
        onReset={onReset}
      />
      <SplitTime value={splits} />
    </div>
  );
};

export default StopWatch;
