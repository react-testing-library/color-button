import { render, screen, fireEvent } from '@testing-library/react';
//component
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('button has correct initial color', () => {
    const button = screen.getByRole('button', { name: 'Change to blue' });
    expect(button).toHaveStyle({ backgroundColor: 'red' });
  });
  test('button turns blue when clicked', () => {
    const button = screen.getByRole('button', { name: 'Change to blue' });
    fireEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: 'blue' });
    expect(button).toHaveTextContent('Change to red');
  });
});
