import React, { useState } from "react";
import Rectangle from "./Rectangle";
import Frontpage from "../assets/Portfolio færdig _Page_03.jpg";
import Two from "../assets/Portfolio færdig _Page_:Users:idavilladsen:Desktop:portfolio:Portfolio færdig _Page_04.jpg04.jpg";
import Three from "../assets/Portfolio færdig _Page_05.jpg";
import Four from "../assets/Portfolio færdig _Page_06.jpg";
import Five from "../assets/Portfolio færdig _Page_07.jpg";
import Seven from "../assets/Portfolio færdig _Page_09.jpg";
import Eight from "../assets/Portfolio færdig _Page_10.jpg";

function Projects(props) {
  const [showArchitecture, setShowArchitecture] = useState(true);
  const projectsData = [Frontpage, Two, Three, Four, Five, Seven, Eight];
  const projects = projectsData.map((e, index) => (
    <Rectangle
      img={e}
      key={index}
      //name={e}
      sizeW={"500px"}
      sizeH={"350px"}
      //adding={"25px"}
    />
  ));
  const title = {
    //color: "white",
    display: "flex",
    justifyContent: "center",
    margin: "50px",
    color: "rgb(196, 196, 196)",
    //margin: "50px",
  };
  const projectsContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //margin: "100px",
    //width: "600px",
    overflow: "hidden",
    //padding: "25px",
  };
  const page = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const fane = {
    color: "rgb(196, 196, 196)",
    fontFamily: "Poppins",
    marginRight: "60px",
    marginLeft: "60px",
  };
  const faner = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };
  function clickArchitecture() {
    setShowArchitecture(true);
  }
  function clickInteraction() {
    setShowArchitecture(false);
  }

  return (
    <>
      <div style={page}>
        <h5 style={title}>Projects</h5>

        <div style={faner}>
          <h5
            onClick={clickArchitecture}
            className={"changeColorHover"}
            style={fane}
          >
            Architecture
          </h5>
          <h5
            onClick={clickInteraction}
            className={"changeColorHover"}
            style={fane}
          >
            Interaction Design
          </h5>
        </div>
        {showArchitecture ? (
          <div style={projectsContainer}>{projects}</div>
        ) : (
          <p style={{ color: "white", marginTop: "50px" }}>
            No projects to show yet
          </p>
        )}
      </div>
    </>
  );
}

export default Projects;
