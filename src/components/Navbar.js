import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand-mark">
        <span className="brand-dot" />
        <div>
          <p>Aditya Goyal</p>
          <span>AI and Data Portfolio</span>
        </div>
      </div>
      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
