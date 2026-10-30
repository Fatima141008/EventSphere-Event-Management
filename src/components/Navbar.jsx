// Navbar.jsx
// ------------------------------------------------------------
// Shows the site title and the navigation links (Home, Events,
// About, Contact) on every page.
//
// REACT CONCEPTS USED HERE:
// - useState: remembers whether the mobile menu is open or closed.
// - Event handling (onClick): toggles the menu when the button is tapped.
// - NavLink (from react-router-dom): works like a normal link, but
//   automatically adds an "active" class when its path matches the
//   current URL - that's how we highlight the current page.
// ------------------------------------------------------------

import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // isMenuOpen controls the small dropdown menu that appears on
  // mobile screens when the hamburger icon (☰) is tapped.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    // Flips true -> false or false -> true.
    setIsMenuOpen(!isMenuOpen);
  }

  // Every time the user clicks a link, we also close the mobile
  // menu so it does not stay open after navigating to a new page.
  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Event<span>Sphere</span>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>

      {/* Template literal is used to add the "open" class only when
          isMenuOpen is true. This is a simple form of conditional
          rendering applied to a CSS class instead of a whole element. */}
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
