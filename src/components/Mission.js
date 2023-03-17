/* eslint-disable */
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../redux/MissionData/MissionDataSlice";
import { reserveMission } from "../redux/MissionData/MissionDataSlice";
import "./Mission.css";

const Mission = () => {
  const dispatch = useDispatch();
  const { MissionData } = useSelector((state) => state.Missions);

  const [isActive, setActive] = useState("true");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const dataFromAPI = MissionData;
  const membershipHandler = (mission_id) => {
    dispatch(reserveMission(mission_id));
    ToggleClass();
  };

  return (
    <>
      <div className="wrapper">
        <div className={isActive ? "ActiveContainer container" : "container"}>
          <div className="heading">
            <div className="col">Mission</div>
            <div className="col">Description </div>
            <div className="col">Status</div>
            <div className="col"> </div>
          </div>
          {dataFromAPI.map((data) => (
            <div className="table-row">
              <div className="col">{data.mission_name}</div>
              <div className="col"> {data.description}</div>
              <div className="col">
                {" "}
                <span className={data.reserved ? "ActiveMembership" : "Membership"}>
                  {data.reserved ? "reserved" : "Not a member"}
                </span>
              </div>
              <div className="col">
                {" "}
                {data.reserved && (
                  <button
                    className="joinMissionButton"
                    onClick={() => membershipHandler(data.mission_id)}
                  >
                    Leave mission
                  </button>
                )}{" "}
                {!data.reserved && (
                  <button
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
