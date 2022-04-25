import { hot } from 'react-hot-loader/root';
import { useState } from 'react';

const App = () => {
  const [isRed, setIsRed] = useState(true),
    [checked, setChecked] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: isRed ? 'red' : 'blue' }}
        onClick={() => setIsRed((prev) => !prev)}
        disabled={checked}
      >
        Change to {isRed ? 'blue' : 'red'}
      </button>
      <div>
        <input
          type="checkbox"
          value={checked}
          onChange={() => {
            setChecked((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
};

export default hot(App);
