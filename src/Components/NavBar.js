import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Navbar.scss';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/profil" className={location.pathname === '/profil' ? 'active' : ''}>
            Profil
          </Link>
        </li>
        <li>
          <Link to="/projets" className={location.pathname === '/projets' ? 'active' : ''}>
            Projets
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='icon'>
      <div className="linkedin-icon">
        <a href="https://www.linkedin.com/in/helena-oursel-1306971a0" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div className="github-icon">
        <a href="https://github.com/HelenaOursel/HelenaOursel.github.io" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;