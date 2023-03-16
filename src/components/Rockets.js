/* eslint-disable react/jsx-key */
/* eslint-disable import/extensions */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRocketData } from '../redux/Rockets/Rocketslice';
import Rocketer from './Rocket';
// rockets
const Rockets = () => {
  const dispatch = useDispatch();
  const { MissionData } = useSelector((state) => state.Rockets);
  const Rocketlist = MissionData.map((Rock) => (
    <Rocketer Rocket={Rock} />
  ));
  useEffect(() => {
    dispatch(fetchRocketData());
  }, [dispatch]);
  return (
    <div>
      {
       Rocketlist
      }
    </div>
  );
};
export default Rockets;
