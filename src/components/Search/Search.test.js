import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';
const defaultProps = {
    onClickSearch: () => {}
}

describe('<Search />', () => {
    test('component should render', () => {
        const { asFragment } = render(<Search {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('should fire onKeyDown event', () => {
        const { getByTestId } = render(<Search {...defaultProps} />);
        const inputEle = getByTestId('search-input');
        expect(getByTestId('container')).toBeTruthy();
        expect(getByTestId('search-box')).toBeTruthy();
        expect(inputEle).toBeTruthy();
        fireEvent.keyPress(inputEle, { key: "Enter", keyCode: 13 });
    });

    test('should fire button click event', () => {
        const { getByTestId } = render(<Search {...defaultProps}/>);
        const buttonEle = getByTestId('search-button');
        expect(getByTestId('container')).toBeTruthy();
        expect(buttonEle).toBeTruthy();
        fireEvent.click(buttonEle);
    });
});