/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../redux/MissionData/MissionDataSlice';
import './Mission.css';

const Mission = () => {
  const dispatch = useDispatch();
  const { MissionData } = useSelector((state) => state.Missions);
  // console.log(Missions);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

   const dataFromAPI = MissionData;
   console.log(dataFromAPI)

  return (
    <>
        <div className= "container">
          <div className="heading">
            <div className="col">category ID</div>
            <div className="col">category </div>
            <div className="col">category ID</div>
            <div className="col"> </div>
          </div>
            {dataFromAPI.map((data)=> (
              <div className="table-row" id={data.mission_id}>
                <div className="col">{data.mission_name}</div>
                <div className="col">{data.description}</div>
                <div className="col"> <button>Not A Member</button></div>
                <div className="col"> <button>Join Mission</button></div>
            </div>
            ))}
        </div>           
        </>
  );
};

export default Mission;
