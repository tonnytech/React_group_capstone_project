/* eslint-disable import/extensions */
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from 'src/components/Navbar';
import store from 'src/redux/store';

it('Header page renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
