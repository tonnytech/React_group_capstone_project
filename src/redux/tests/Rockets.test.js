/* eslint-disable import/extensions */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import axios from 'axios';
import Rockets from 'src/components/Rockets';
import store from 'src/redux/store';
import { fetchRocketData, rocketreserve } from 'src/redux/Rockets/Rocketslice';

it('Rocket page renders rockets and details', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Rocket redux state tests', () => {
  it('Reserved Rocket payload should send correctly', () => {
    const expectedPayload = {
      payload: '9D1B7E0',
      type: 'rockets/reserveRocket',
    };
    const actualPayload = rocketreserve('9D1B7E0');
    expect(actualPayload).toEqual(expectedPayload);
  });
  it('Rockets fetch data from API', async () => {
    const url = 'https://api.spacexdata.com/v3/rockets';
    const axiosEl = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchEl = jest.fn();
    await fetchRocketData(url)(dispatchEl);
    expect(axiosEl).toHaveBeenCalledWith(url);
  });
});
