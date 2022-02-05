import PropTypes from 'prop-types';
import MajorClock from './MajorClock';

const SplitTime = ({ value = [] }) => {
  return value.map((v, k) => (
    <div className='text-teal-700 text-2xl'>
      <MajorClock key={k} milliseconds={v} />
    </div>
  ));
};

SplitTime.propTypes = {
  splits: PropTypes.arrayOf(PropTypes.number),
};

export default SplitTime;
