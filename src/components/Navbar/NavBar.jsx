import { React, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavBar.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
  const menuRef = useRef();
  const openMenu = () => {
    console.log("button clicked");
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        <img src="../Group 160.png" alt="Company Logo" className="mainlogo" />
      </a>

      <img
        src="../menu_open.svg"
        onClick={openMenu}
        alt=""
        className="nav-mob-open"
      />

      <ul ref={menuRef} className="navbar-nav me-auto nav-menu">
        <img
          src="menu_close.svg"
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Products <RiArrowDropDownLine />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Resources <RiArrowDropDownLine />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Pricing
          </a>
        </li>
      </ul>

      <div className="dropdown">
        <a
          href="#"
          className="d-block text-decoration-none "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="../Avatar.png"
            alt="User Avatar"
            className="avatar"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
