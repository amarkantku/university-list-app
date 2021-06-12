import React from 'react';
import Loder from './Loder';
import { render } from '@testing-library/react';



describe("<Loder />", () => {
    test ('should component render', () => {
        const { asFragment } = render(<Loder />);
        expect(asFragment()).toMatchSnapshot();
      });
      
    test('should have getByTestId="spinner"', () => {
        const { getByTestId } = render(<Loder />);
        expect(getByTestId('spinner')).toBeTruthy();
    });
    test('should have spinner class', () => {
        const { getByTestId } = render(<Loder />);
        expect(getByTestId('circle')).toBeTruthy();
    });
})