import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <ul>
      <li>
        <NavLink
          to="/my-profile"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
        >
          {' '}
          My Profile
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
