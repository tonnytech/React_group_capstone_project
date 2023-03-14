import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div>
    <ul>
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" alt="" />
        <h2>space travelers&apos; hub</h2>
      </div>
      <div className="links">
        <li>
          <NavLink
            className="nav"
            to="/Rockets"
          >
            {' '}
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav"
            to="/my-profile"
          >
            {' '}
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav"
            to="/missions"
          >
            {' '}
            Missions
          </NavLink>
        </li>
      </div>
    </ul>
  </div>
);

export default Navbar;
