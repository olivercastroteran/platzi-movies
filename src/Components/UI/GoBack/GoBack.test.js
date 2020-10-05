import React from 'react';
import { render } from '@testing-library/react';
import GoBack from './GoBack';

test('Renders correctly', () => {
  const { getByTestId } = render(<GoBack />);

  expect(getByTestId('go-back')).not.toBeNull();
});
