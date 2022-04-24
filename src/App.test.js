import { cleanup, render, screen } from '@testing-library/react';
//component
import App from './App';

afterEach(cleanup);

describe('App Component', () => {
  beforeAll(() => {
    render(<App />);
  });
  test('button has correct initial color', () => {
    const button = screen.getByRole('button', { name: 'Change to blue' });
    expect(button).toHaveStyle({ backgroundColor: 'red' });
  });
  test('button turns blue when clicked', () => {});
});
