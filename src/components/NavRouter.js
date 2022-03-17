import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Home from "./Home";
import BurgerMenu from "./BurgerMenu";

function NavRouter() {
  return (
    <>
      <Router>
        {/* <NavMenu setEmptyStats={() => setEmptyStats(true)} /> */}
        <BurgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default NavRouter;
