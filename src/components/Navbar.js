import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/my-profile"> My Profile </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
