import React from "react";

const Header = () => {
  return (
    <>
      <nav className="nav">
        <a href="/">Netflix</a>
        <div>
          <ul className="nav-ul">
            <li>Home</li>
            <li>Movies</li>
            <li>Ratings</li>
            <li>Help</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
