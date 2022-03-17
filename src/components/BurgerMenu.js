import React from "react";
import { Link } from "react-router-dom";
import { scaleDown as Menu } from "react-burger-menu";

function BurgerMenu() {
  const burgerMenu = {
    position: "absolute",
    zIndex: "500",
    width: "200px",
    height: "200px",
  };

  return (
    <>
      <Menu style={burgerMenu}>
        {/* <h1>BURGER!</h1> */}
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="about" className="menu-item" to="/about">
          About
        </Link>
        <Link id="projects" className="menu-item" to="/projects">
          Projects
        </Link>
        <Link id="contact" className="menu-item" to="/contact">
          Contact
        </Link>
      </Menu>
    </>
  );
}

export default BurgerMenu;
