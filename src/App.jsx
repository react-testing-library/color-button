import { hot } from 'react-hot-loader/root';

const App = () => {
  return (
    <div>
      <button style={{ backgroundColor: 'red' }}>Change to blue</button>
    </div>
  );
};

export default hot(App);
