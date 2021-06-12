import React from 'react';
import Layout from './Layout';
import { render } from '@testing-library/react';


const defaultProps = {
    title: 'Test Layout Title'
}
describe("<Layout />", () => {
    test ('should component render', () => {
        const { asFragment } = render(<Layout {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
      
    test('should have getByTestId="layout"', () => {
        const { getByTestId } = render(<Layout {...defaultProps} />);
        expect(getByTestId('layout')).toBeTruthy();
    });

    test('should have getByTestId="main"', () => {
        const { getByTestId } = render(<Layout {...defaultProps} />);
        expect(getByTestId('main')).toBeTruthy();
    });

    test('should have contain h2 header text ="Test Layout Title"', () => {
        const { queryByText } = render(<Layout {...defaultProps} />);
        expect(queryByText(defaultProps.title)).toBeTruthy();
    });

    test('should have children', () => {
        const { queryByText } = render(<Layout {...defaultProps}>Children</Layout>);
        expect(queryByText('Children')).toBeTruthy();
    });
})