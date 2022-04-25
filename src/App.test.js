import { render, screen, fireEvent } from '@testing-library/react';
//component
import App from './App';

describe('App Component', () => {
  describe('button color and functionality', () => {
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

  describe('checkbox and interaction with the button', () => {
    beforeEach(() => {
      render(<App />);
    });
    test('button is initially enabled', () => {
      const button = screen.getByRole('button', { name: 'Change to blue' });
      expect(button).toBeEnabled();
    });
    test('checkbox is initially not checked', () => {
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });
    /*test('button is disabled after checking the checkbox', () => {
      const checkBox = screen.getByRole('checkbox'),
        button = screen.getByRole('button', { name: 'Change to blue' });

      fireEvent.change(checkBox);
      expect(checkBox).toBeChecked();
      expect(button).toBeDisabled();
    });*/
  });
});
