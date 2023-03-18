import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { reserveMission } from '../redux/MissionData/MissionDataSlice';
import './Mission.css';

const Mission = () => {
  const dispatch = useDispatch();
  const { MissionData } = useSelector((state) => state.Missions);

  const [isActive, setActive] = useState('true');

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const dataFromAPI = MissionData;
  const membershipHandler = (missionId) => {
    dispatch(reserveMission(missionId));
    ToggleClass();
  };

  return (
    <>
      <div className="wrapper" data-testid="missionContainer">
        <div className={isActive ? 'ActiveContainer container' : 'container'}>
          <div className="heading">
            <div className="col">Mission</div>
            <div className="col">Description </div>
            <div className="col">Status</div>
            <div className="col"> </div>
          </div>
          {dataFromAPI.map((data) => (
            <div data-testid="rows" className="table-row" key={data.mission_id}>
              <div className="col">{data.mission_name}</div>
              <div className="col">
                {' '}
                {data.description}
              </div>
              <div className="col">
                {' '}
                <span className={data.reserved ? 'ActiveMembership' : 'Membership'}>
                  {data.reserved ? 'reserved' : 'Not a member'}
                </span>
              </div>
              <div className="col">
                {' '}
                {data.reserved && (
                  <button
                    type="button"
                    className="joinMissionButton"
                    onClick={() => membershipHandler(data.mission_id)}
                  >
                    Leave mission
                  </button>
                )}
                {' '}
                {!data.reserved && (
                  <button
                    type="button"
                    className="cancelMissionButton"
                    onClick={() => membershipHandler(data.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mission;
