/* eslint-disable camelcase */
import './Rockets.css';
import { PropTypes } from 'prop-types';

const Rocketer = ({ Rocket }) => {
  const {
    id,
    rocket_name,
    description,
    flickr_images,
  } = Rocket;
  return (
    <div id={id} className="rockets">
      <img src={flickr_images} alt="" />
      <div className="rockets-children">
        <h3>
          { rocket_name }
        </h3>
        <p>
          { description }
        </p>
        <button type="button">reserve rocket</button>
      </div>
    </div>
  );
};

Rocketer.propTypes = {
  Rocket: PropTypes.shape({
    id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default Rocketer;
