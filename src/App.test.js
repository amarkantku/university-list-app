import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from '../src/store';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
const store = configureStore();

describe('<App />', () => {
  test('should component render', () => {
    const history = createMemoryHistory()
    const component = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    )
    expect(component).toMatchSnapshot();
  });
})