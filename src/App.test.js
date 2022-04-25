import { render, screen, fireEvent } from '@testing-library/react';
//component
import App from './App';
//helpers
import { replaceCamelWithSpaces } from '@/js/constants/Helpers';

describe('App Component', () => {
  describe('button color and functionality', () => {
    beforeEach(() => {
      render(<App />);
    });
    test('button has correct initial color', () => {
      const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });
      expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
    });
    test('button turns blue when clicked', () => {
      const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });
      fireEvent.click(button);
      expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
      expect(button).toHaveTextContent('Change to MediumVioletRed');
    });
  });

  describe('checkbox and interaction with the button', () => {
    beforeEach(() => {
      render(<App />);
    });
    test('button is initially enabled', () => {
      const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });
      expect(button).toBeEnabled();
    });
    test('checkbox is initially not checked', () => {
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });
    test('checkbox disables button on first click and enables on second click', () => {
      const checkBox = screen.getByRole('checkbox', { name: 'Disable button' }),
        button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

      fireEvent.click(checkBox);
      expect(checkBox).toBeChecked();
      expect(button).toBeDisabled();

      fireEvent.click(checkBox);
      expect(checkBox).not.toBeChecked();
      expect(button).toBeEnabled();
    });
    test('Disabled button has gray background and reverts to MediumVioletRed', () => {
      const checkBox = screen.getByRole('checkbox', { name: 'Disable button' }),
        button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

      fireEvent.click(checkBox);
      expect(button).toHaveStyle({ backgroundColor: 'gray' });

      fireEvent.click(checkBox);
      expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
    });
    test('Clicked disabled button has gray background and reverts to blue', () => {
      const checkBox = screen.getByRole('checkbox', { name: 'Disable button' }),
        button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

      fireEvent.click(button);
      fireEvent.click(checkBox);
      expect(button).toHaveStyle({ backgroundColor: 'gray' });

      fireEvent.click(checkBox);
      expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
    });
  });
  describe('spaces before camel-case capital letters', () => {
    test('Works for no inner capital letters', () => {
      expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });
    test('Works for one inner capital letter', () => {
      expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });
    test('Works for multiple inner capital letters', () => {
      expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });
  });
});
