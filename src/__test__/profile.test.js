import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfile from '../components/MyProfile';

describe('is Profile having reserve titles ', () => {
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
    Rockets: {
      RocketData: [
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

  test('profile should render', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const ProfileContainer = screen.getByTestId('profileContainer');
    expect(ProfileContainer).toBeInTheDocument();
  });
});
