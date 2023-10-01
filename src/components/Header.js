import React, { useState } from "react";

const Header = () => {
  const [state, setState] = useState(true);
  const handleclick = () => {
    setState(!state);
  };
  return (
    <>
      <nav className="nav">
        <a href="/">Netflix</a>
        <div>
          <ul className={state ? "nav-ul" : "nav-ul active"}>
            <li>Home</li>
            <li>Movies</li>
            <li>Ratings</li>
            <li>Help</li>
          </ul>
        </div>
        <div id="mobile">
          <i
            onClick={handleclick}
            className={state ? "fas fa-bars" : "fas fa-times"}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Header;
