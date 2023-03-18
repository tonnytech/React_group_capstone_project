/* eslint-disable import/extensions */
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyProfile from 'src/components/MyProfile';
import store from 'src/redux/store';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <MyProfile />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
