import './MyProfile.css';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { MissionData } = useSelector((state) => state.Missions);
  const { RocketData } = useSelector((state) => state.Rockets);
  const reservedRockets = RocketData.filter((rock) => rock.reserved);
  const reservedmissions = MissionData.filter((mission) => mission.reserved);
  const displayrocks = reservedRockets.map((rock) => (
    <li key={rock.rocket}>{rock.rocket_name}</li>
  ));
  const displaymissions = reservedmissions.map((mission) => (
    <li key={mission.mission_name}>{mission.mission_name}</li>
  ));

  return (
    <div className="profile" data-testid="profileContainer">
      <div className="missions">
        <h2>My missions</h2>
        <ul>{displaymissions}</ul>
      </div>
      <div className="missions">
        <h2>My Rockets</h2>
        <ul>{displayrocks}</ul>
      </div>
    </div>
  );
};

export default MyProfile;
