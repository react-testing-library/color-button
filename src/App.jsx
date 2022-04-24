import { hot } from 'react-hot-loader/root';
import { useState } from 'react';

const App = () => {
  const [isRed, setIsRed] = useState(true);
  return (
    <div>
      <button
        style={{ backgroundColor: isRed ? 'red' : 'blue' }}
        onClick={() => setIsRed((prev) => !prev)}
      >
        Change to {isRed ? 'blue' : 'red'}
      </button>
    </div>
  );
};

export default hot(App);
