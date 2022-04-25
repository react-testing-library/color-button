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
    test('checkbox disables button on first click and enables on second click', () => {
      const checkBox = screen.getByRole('checkbox', { name: 'Disable button' }),
        button = screen.getByRole('button', { name: 'Change to blue' });

      fireEvent.click(checkBox);
      expect(checkBox).toBeChecked();
      expect(button).toBeDisabled();

      fireEvent.click(checkBox);
      expect(checkBox).not.toBeChecked();
      expect(button).toBeEnabled();
    });
    test('Disabled button has gray background and reverts to red', () => {
      const checkBox = screen.getByRole('checkbox', { name: 'Disable button' }),
        button = screen.getByRole('button', { name: 'Change to blue' });

      fireEvent.click(checkBox);
      expect(button).toHaveStyle({ backgroundColor: 'gray' });

      fireEvent.click(checkBox);
      expect(button).toHaveStyle({ backgroundColor: 'red' });
    });
    test('Clicked disabled button has gray background and reverts to blue', () => {
      const checkBox = screen.getByRole('checkbox', { name: 'Disable button' }),
        button = screen.getByRole('button', { name: 'Change to blue' });

      fireEvent.click(button);
      fireEvent.click(checkBox);
      expect(button).toHaveStyle({ backgroundColor: 'gray' });

      fireEvent.click(checkBox);
      expect(button).toHaveStyle({ backgroundColor: 'blue' });
    });
  });
});
