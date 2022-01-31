import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/countercomponent">Counter Component</Link>
        <Link to="/counterhooks">Counter Hooks</Link>
      </nav>
    </div>
  );
};

export default Navbar;
