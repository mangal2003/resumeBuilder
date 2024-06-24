import React, { useEffect } from "react";
import "./navbar.css";
const Navbar = () => {
  useEffect(() => {
    let navbarWrapper = document.getElementById("navbarWrapper");
    if (localStorage.getItem("nameShiv") === null) {
      navbarWrapper.style.display = "none";
    }
  }, []);
  const logoutUser = () => {
    const yes = window.confirm("You will be logged out.?");
    if (yes) {
      localStorage.removeItem("nameShiv");
      localStorage.removeItem("mailShiv");
      window.location.reload();
    }
  };
  return (
    <div id="navbarWrapper">
      <div className="greet">Resume Builder</div>

      <div className="logoutOpt" onClick={logoutUser}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
