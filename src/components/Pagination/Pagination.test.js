import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Pagination from './Pagination';
import configureStore from '../../store';
const store = configureStore();

const defaultProps = {
  meta: {
    currentPage: 1,
    endIndex: 1,
    endPage: 1,
    initialPage: 1,
    startPage: 1,
    pageSize: 20,
    pages: [],
    startIndex: 1,
    totalPages: 1,
    totalRecords: 100,
  }
}

describe('<Pagination />', () => {
    test('should component render', () => {
        const component = render(
          <Provider store={store}>
            <Pagination {...defaultProps} />
          </Provider>
        )
        expect(component).toMatchSnapshot();
    });

    test('set onPageChanged() random page no', () => {
        const { getByTestId, queryByText } = render(
            <Provider store={store}>
              <Pagination {...defaultProps} />
            </Provider>
          )
        expect(getByTestId('pagination')).toBeTruthy();
        expect(queryByText('First')).toBeTruthy();
        expect(queryByText('Last')).toBeTruthy();
        const inputNode = getByTestId('first-page');
        fireEvent.click(inputNode);
    });
});