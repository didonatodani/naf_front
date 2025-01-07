import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu-icon.png";

import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  function closeMenu() {
    showMenuIcon && setShowMenu(false);
    setShowDropdown(false);
  }

  // handle screen sizes for menu display
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 575) {
        setShowMenu(true);
        setShowMenuIcon(false);
      } else {
        setShowMenu(false);
        setShowMenuIcon(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <Link to={"/"}>
        <img src={Logo} alt="NAF logo" id="navbar-logo" />
      </Link>

      {showMenuIcon && (
        <img
          src={MenuIcon}
          alt="menu-icon"
          id="menu-icon"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
      )}

      {/* navbar*/}
      {showMenu && (
        <nav className="navbar">
          <NavLink to={"/"} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to={"/about"} onClick={closeMenu}>
            About Us
          </NavLink>

          {/* dropdown for projects */}
          <div className="dropdown-menu">
            <button
              className="dropdown-btn"
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              Projects ↓
            </button>
            {showDropdown && (
              <ul className="dropdown-ul">
                <li>
                  <NavLink to={"/construction"} onClick={closeMenu}>
                    Construction
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/bim"} onClick={closeMenu}>
                    BIM
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/woodframe"} onClick={closeMenu}>
                    Wood Frame
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink to={"/contact"} onClick={closeMenu}>
            Contact Us
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
