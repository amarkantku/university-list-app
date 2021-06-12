import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';

const defaultProps ={
  'data-testid': 'header'
}


describe('<Header />', () => {
  test('should render correct text', () => {
    const component = render(<Header {...defaultProps} />);
    expect(component).toMatchSnapshot();
    expect(component.queryByText("University List App")).toBeTruthy();
  });
  
  test('should have header element', () => {
    const { getByTestId } = render(<Header {...defaultProps} />);
    expect(getByTestId('header')).toBeTruthy();
  });
})
