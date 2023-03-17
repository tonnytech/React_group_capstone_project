/* eslint-disable */
import './MyProfile.css'
import { useSelector, useDispatch } from "react-redux";

const MyProfile = () => {
  const dispatch = useDispatch;
  const { MissionData } = useSelector((state) => state.Missions);
  const { RocketData } = useSelector((state) => state.Rockets);
  const reservedRockets = RocketData.filter((rock) => rock.reserved);
  const reservedmissions = MissionData.filter((mission) => mission.reserved);
  const displayrocks = reservedRockets.map((rock) => <li>{rock.rocket_name}</li>)
  const displaymissions = reservedmissions.map((mission) => <li>{mission.mission_name}</li>)

  return (
  <div className='profile'>
    <div className='missions'>
      <h2>My missions</h2>
      <ul>{displaymissions}</ul>
    </div>
    <div className='missions'>
    <h2>My Rockets</h2>
      <ul>{displayrocks}</ul>
    </div>
  </div>
);
  }

export default MyProfile;

