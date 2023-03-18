import { useSelector } from 'react-redux';
import Rocketer from './Rocket';

const Rockets = (rocket_id) => {
  const { RocketData } = useSelector((state) => state.Rockets);
  const Rocketlist = RocketData.map((Rock) => (
    <Rocketer Rocket={Rock} key={rocket_id} />
  ));
  return (
    <div data-testid="rocketContainer">
      {
       Rocketlist
      }
    </div>
  );
};
export default Rockets;
