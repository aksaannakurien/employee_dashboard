import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        {/* Brand Logo & Name */}
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4" to="/" onClick={closeNavbar}>
          <div className="avatar-circle" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }}>
            <i className="bi bi-people-fill"></i>
          </div>
          <span className="text-white tracking-tight">
            Emp<span className="text-primary">Dashboard</span>
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show mt-3 mt-lg-0' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-2">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `custom-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeNavbar}
              >
                <i className="bi bi-house-door-fill"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/employee-form"
                className={({ isActive }) =>
                  `custom-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeNavbar}
              >
                <i className="bi bi-person-plus-fill"></i>
                <span>Employee Form</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
