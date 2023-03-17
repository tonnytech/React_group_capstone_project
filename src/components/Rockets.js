/* eslint-disable react/jsx-key */
/* eslint-disable import/extensions */
import { useSelector } from 'react-redux';
import Rocketer from './Rocket';

const Rockets = () => {
  const { RocketData } = useSelector((state) => state.Rockets);
  const Rocketlist = RocketData.map((Rock) => (
    <Rocketer Rocket={Rock} />
  ));
  return (
    <div>
      {
       Rocketlist
      }
    </div>
  );
};
export default Rockets;
