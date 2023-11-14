import { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className={`${styles.nav}`}>
        {
          <NavLink to="/" className={`${styles.logo}`}>
            <h1>Our Hostel</h1>
          </NavLink>
        }

        <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
          <li onClick={removeActive}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink
              to="/hostels"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Hostels
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              About Us
            </NavLink>
          </li>
          <li onClick={removeActive}>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              ContactUs
            </NavLink>
          </li>
          <div className="bts">
            <NavLink to="/signup">
              <button className={styles.signUpBtn}>Sign Up</button>
            </NavLink>
          </div>
        </ul>

        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""} `}
          onClick={toggleActiveClass}
        >
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </div>
      <div className="p-10">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
