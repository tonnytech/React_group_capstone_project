/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Mission from './components/Mission';
import store from './redux/store';
import { fetchData, reserveMission } from '../redux/MissionData/MissionDataSlice';

it('expect Mission page renders correctly', () => {
  const tree = renderer
    .create(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Mission />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Mission redux state tests', () => {
  it('Should initially set Missions store to an empty Array', () => {
    const state = store.getState().Missions;
    expect(state.Mission).toEqual([]);
  });

  it('should Join Mission payload send correct', () => {
    const expectedPayload = {
      payload: '9D1B7E5',
      type: 'missions/joinMission',
    };
    const actualPayload = reserveMission('9D1B7E5');
    expect(actualPayload).toEqual(expectedPayload);
  });

  it('Mission fetch data from API', async () => {
    const url = 'https://api.spacexdata.com/v3/missions';
    const axiosSpy = jest.spyOn(axios, 'get');
    jest.setTimeout(90000);
    const dispatchSpy = jest.fn();

    await fetchData(url)(dispatchSpy);

    expect(axiosSpy).toHaveBeenCalledWith(url);
  });
});
