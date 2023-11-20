import { useState } from "react";
import styles from "./navbar.module.css";
import { Search, Menu, Close } from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    // code goes here
    console.log(searchValue);
  };
  return (
    <main className="relative">
      <div className={styles.bg}>
        <div className={`${styles.nav_items} h-full mx-auto max-w-[1280px]`}>
          <NavLink to="/" className={styles.logo}>
            <h1>Our Hostel</h1>
          </NavLink>
          <ul className="md:flex hidden">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/hostels">Hostels</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          {/* Small Screen Search */}
          <div
            className="md:flex hidden cursor-pointer"
            onClick={() => {
              setShowSearch(!showSearch);
            }}
          >
            <Search className="w-20 h-20" />
          </div>

          <div className="md:flex hidden">
            <NavLink to="/signup">
              <button className="px-8 py-2 rounded-[5em] border-solid border-2 border-[#2e2f84]">
                Sign Up
              </button>
            </NavLink>
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden flex gap-10">
            {/* Small Screen Search */}
            <div
              className="md:hidden flex cursor-pointer"
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            >
              <Search className="w-20 h-20" />
            </div>
            {showHamburger ? (
              <Close
                className={`h-20 w-32 cursor-pointer`}
                onClick={() => {
                  setShowHamburger(false);
                }}
              />
            ) : (
              <Menu
                className={`h-20 w-32 cursor-pointer`}
                onClick={() => {
                  setShowHamburger(true);
                }}
              />
            )}
          </div>
          {/* Hamburger Menu Items */}
          {showHamburger && (
            <div
              className={`${styles.hamburger_items} md:hidden flex fixed top-[80px] right-2`}
            >
              <div>
                <NavLink to="/">Home</NavLink>
              </div>
              <div>
                <NavLink to="/hostels">Hostels</NavLink>
              </div>
              <div>
                <NavLink to="/about-us">About</NavLink>
              </div>
              <div>
                <NavLink to="/contact">Contact</NavLink>
              </div>
              <div>
                <NavLink to="/signup">
                  <button className="px-8 py-2 rounded-[5em] border-solid border-2 border-[#2e2f84]">
                    Sign Up
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
      {showSearch && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="fixed top-[80px] max-w-[480px] w-[95vw] right-1"
            placeholder="Search..."
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </form>
      )}

      <div className="p-10">
        <Outlet />
      </div>
    </main>
    // <>
    //   <div className={`${styles.nav}`}>
    //     {
    //       <NavLink to="/" className={`${styles.logo}`}>
    //         <h1>Our Hostel</h1>
    //       </NavLink>
    //     }

    //     <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
    //       <li onClick={removeActive}>
    //         <NavLink
    //           to="/"
    //           className={({ isActive }) => (isActive ? styles.active : "")}
    //         >
    //           Home
    //         </NavLink>
    //       </li>
    //       <li onClick={removeActive}>
    //         <NavLink
    //           to="/hostels"
    //           className={({ isActive }) => (isActive ? styles.active : "")}
    //         >
    //           Hostels
    //         </NavLink>
    //       </li>
    //       <li onClick={removeActive}>
    //         <NavLink
    //           to="/about-us"
    //           className={({ isActive }) => (isActive ? styles.active : "")}
    //         >
    //           About
    //         </NavLink>
    //       </li>
    //       <li onClick={removeActive}>
    //         <NavLink
    //           to="/contact"
    //           className={({ isActive }) => (isActive ? styles.active : "")}
    //         >
    //           Contact
    //         </NavLink>
    //       </li>
    //       <div className="bts">
    //         <NavLink to="/signup">
    //           <button className={styles.signUpBtn}>Sign Up</button>
    //         </NavLink>
    //       </div>
    //     </ul>

    //     <div className="relative w-full">
    //       <input
    //         type="text"
    //         value={searchTerm}
    //         onChange={handleChange}
    //         placeholder="Search..."
    //         className="w-full py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
    //       />
    //       {searchTerm && (
    //         <button
    //           onClick={handleClear}
    //           className="absolute top-0 right-0 mt-3 mr-4 text-gray-600"
    //         >
    //           &#10005;
    //         </button>
    //       )}
    //     </div>
    //     <button className="ml-2 text-blue-500">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M15 18l-6-6 6-6"
    //         />
    //       </svg>
    //     </button>

    //     <div
    //       className={`${styles.hamburger} ${isActive ? styles.active : ""} `}
    //       onClick={toggleActiveClass}
    //     >
    //       <span className={`${styles.bar}`}></span>
    //       <span className={`${styles.bar}`}></span>
    //       <span className={`${styles.bar}`}></span>
    //     </div>
    //   </div>
    //   <div className="p-10">
    //     <Outlet />
    //   </div>
    // </>
  );
}

export default Navbar;
