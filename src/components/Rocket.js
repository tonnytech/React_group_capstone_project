/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import './Rockets.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketreserve } from '../redux/Rockets/Rocketslice';

const Rocketer = ({ Rocket }) => {
  const {
    rocket_id,
    rocket_name,
    description,
    flickr_images,
    reserved,
  } = Rocket;
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(rocketreserve(rocket_id));
  };
  return (
    <div id={rocket_id} className="rockets">
      <img src={flickr_images} alt="" />
      <div className="rockets-children">
        <h3>
          { rocket_name }
        </h3>
        <p>
          <span>{reserved ? 'reserved' : ''}</span>
          { description }
        </p>
        <p>
          {(reserved && (<button type="button" onClick={(e) => handleclick(e)} className="btn2">cancel reservation</button>))}
          {(!reserved && (<button type="button" onClick={(e) => handleclick(e)} className="btn">reserve rocket</button>))}
        </p>
      </div>
    </div>
  );
};

Rocketer.propTypes = {
  Rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    reserved: PropTypes.string,
  }).isRequired,
};

export default Rocketer;
