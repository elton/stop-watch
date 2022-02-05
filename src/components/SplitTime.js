import PropTypes from 'prop-types';
import MajorClock from './MajorClock';

const SplitTime = ({ value = [] }) => {
  return value.map((v, k) => <MajorClock key={k} milliseconds={v} />);
};

SplitTime.propTypes = {
  splits: PropTypes.arrayOf(PropTypes.number),
};

export default SplitTime;
