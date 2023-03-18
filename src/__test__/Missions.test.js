import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from '../components/Mission';

describe('Missions testing: "features and components"', () => {
  const mockStore = configureStore([]);
  const initialState = {
    Missions: {
      MissionData: [
        {
          mission_id: '1',
          mission_name: 'name1',
          description: 'description1',
          reserved: false,
        },
        {
          mission_id: '2',
          mission_name: 'name2',
          description: 'description2',
          reserved: false,
        },
        {
          mission_id: '3',
          mission_name: 'name3',
          description: 'description3',
          reserved: false,
        },
      ],
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('is no of rows are correct', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    const missionRows = screen.getAllByTestId('rows');

    expect(missionRows.length).toBe(initialState.Missions.MissionData.length);
  });
  test('is Missions container rendering', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    const MissionsContainer = screen.getByTestId('missionContainer');
    expect(MissionsContainer).toBeInTheDocument();
  });
});
