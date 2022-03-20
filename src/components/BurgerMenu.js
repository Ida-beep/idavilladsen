import React from "react";
import { Link } from "react-router-dom";
import { scaleDown as Menu } from "react-burger-menu";

function BurgerMenu() {
  const burgerMenu = {
    //position: "absolute",
    //zIndex: "500",
    //width: "200px",
    //height: "200px",
  };

  return (
    <>
      <Menu style={burgerMenu}>
        <Link id="home" className="menu-item" to="/">
          home
        </Link>
        <Link id="about" className="menu-item" to="/about">
          about me
        </Link>
        <Link id="projects" className="menu-item" to="/projects">
          projects
        </Link>
        <Link id="contact" className="menu-item" to="/contact">
          contact
        </Link>
      </Menu>
    </>
  );
}

export default BurgerMenu;
