import { render, screen } from '@testing-library/react';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './ErrorBoundaryFallback';

describe('ErrorBoundaryFallback', () => {
  test('Error Boundary', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
      <ErrorBoundary
        FallbackComponent={ErrorBoundaryFallback}
        onReset={() => {
          //Reset the state of your app so the error doesn't happen again
          console.log('Try again clicked');
        }}
      >
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByRole('heading', { name: 'Something went wrong:' })).toBeVisible();
  });
});
