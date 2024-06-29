import React from 'react';
import './Navbar.css';

const Navbar = ({ logo, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo.src} alt={logo.alt} />
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
