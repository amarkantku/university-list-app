import React from 'react';
import Footer from './Footer';
import { render } from '@testing-library/react';

describe('<Footer />', () => {
  test('should render correct text', () => {
    const { asFragment, queryByText } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('Footer')).toBeTruthy();
  });
  
  test('should have footer id element', () => {
      const { getByTestId } = render(<Footer />);
      expect(getByTestId('footer')).toBeTruthy();
  });
})
