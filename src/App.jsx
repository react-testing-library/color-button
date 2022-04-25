import { hot } from 'react-hot-loader/root';
import { useState } from 'react';

const App = () => {
  const [isRed, setIsRed] = useState(true),
    [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : isRed ? 'red' : 'blue' }}
        onClick={() => setIsRed((prev) => !prev)}
        disabled={disabled}
      >
        Change to {isRed ? 'blue' : 'red'}
      </button>
      <div>
        <label htmlFor="enable-button-checkbox">Disable button</label>
        <input
          type="checkbox"
          id="enable-button-checkbox"
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
