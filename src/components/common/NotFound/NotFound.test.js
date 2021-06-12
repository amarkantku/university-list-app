import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import NotFound from './NotFound';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<RouteNotFound />', () => {
  test('component should render', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Redirects to correct URL on click', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});