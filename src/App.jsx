import { hot } from 'react-hot-loader/root';
import { useState } from 'react';

const App = () => {
  const [isRed, setIsRed] = useState(true),
    [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: isRed ? 'red' : 'blue' }}
        onClick={() => setIsRed((prev) => !prev)}
        disabled={disabled}
      >
        Change to {isRed ? 'blue' : 'red'}
      </button>
      <div>
        <input
          type="checkbox"
          value={disabled}
          aria-checked={disabled}
          onChange={({ target: { checked } }) => {
            setDisabled(checked);
          }}
        />
      </div>
    </div>
  );
};

export default hot(App);
