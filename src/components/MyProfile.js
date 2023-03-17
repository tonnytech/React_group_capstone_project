/* eslint-disable */

import { useSelector, useDispatch } from "react-redux";

const MyProfile = () => {
  const dispatch = useDispatch;
  const { MissionData } = useSelector((state) => state.Missions);

  return (
  <div>My profile</div>
);
  }

export default MyProfile;

