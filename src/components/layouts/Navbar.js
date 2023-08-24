import React from "react";
import PropTypes from "prop-types";
import{NavLink} from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon} />
        {props.title}
      </h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        
      </ul>
     
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
