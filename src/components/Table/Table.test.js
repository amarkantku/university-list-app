import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Table from './Table';
const defaultProps = {
    tHead: ['name', 'state', 'country', 'website', 'country code'],
    tBodyData: [],
    isLoading: false,
}

describe('<Table />', () => {
    test('component should render', () => {
        const { asFragment } = render(<Table {...defaultProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('should render table with empty record', () => {
        const { getByText, queryAllByText, queryByText } = render(<Table {...defaultProps} />);
        expect(getByText(/name/i)).toBeInTheDocument();
        expect(queryAllByText(/country/i)).toBeTruthy();
        expect(getByText(/website/i)).toBeInTheDocument();
        expect(getByText(/state/i)).toBeInTheDocument();
        expect(queryByText('No Record Found.')).toBeTruthy();
    });

    test('should render with record', () => {
        defaultProps.tBodyData = [
            {
                id: 1,
                name: 'ABC University',
                'state-province': 'Delhi',
                country: 'India',
                alpha_two_code: 'IN',
                web_pages: ['www.abc.test']
            },{
                id: 2,
                name: 'XYZ University',
                'state-province': 'Delhi',
                country: 'India',
                alpha_two_code: 'IN',
                web_pages: ['www.xyx.test']
            }
        ]
        const { getByText, queryAllByText, queryByText } = render(
            <Router>
                <Table {...defaultProps}/>
            </Router>
            );
        expect(getByText(/name/i)).toBeInTheDocument();
        expect(queryAllByText(/country/i)).toBeTruthy();
        expect(getByText(/website/i)).toBeInTheDocument();
        expect(getByText(/state/i)).toBeInTheDocument();
        expect(queryByText('No Record Found.')).toBeFalsy();
        expect(queryByText('XYZ University')).toBeTruthy();
    });

    test('should navigate to other', () => {
        const {getByTestId} = render(
            <Router>
                <Table {...defaultProps}/>
            </Router>
            );
        const divWebsiteEle = getByTestId('row-website-1');
        expect(divWebsiteEle).toBeTruthy();
        fireEvent.click(divWebsiteEle);
        const divNameEle = getByTestId('row-name-1');
        expect(divNameEle).toBeTruthy();
        fireEvent.click(divNameEle);
    });
});