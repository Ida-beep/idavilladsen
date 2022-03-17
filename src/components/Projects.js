import React from "react";
import Rectangle from "./Rectangle";
import PlanetButton from "./PlanetButton";

function Projects(props) {
  const projectsData = [
    "flower",
    "VR",
    "apps",
    "under water",
    "models",
    "spatial art",
  ];
  const projects = projectsData.map((e, index) => (
    <Rectangle key={index} name={e} />
  ));
  const title = {
    color: "white",
    display: "flex",
    justifyContent: "center",
    margin: "50px",
  };
  const projectsContainer = {
    display: "flex",
    flexDirection: "row",
    //justifyContent:"center",
    margin: "100px",
    width: "600px",
    overflow: "hidden",
  };
  const page = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  /*   function handleClick(e) {
    console.log("click!!  :", e);
    props.setShowProjects(props.showPlanets);
    //props.setShowProjects(props.setShowProjects);
  } */

  return (
    <>
      <div style={page}>
        <h3 style={title}>Projects</h3>
        {/* <PlanetButton onClick={(e)=>handleClick(e)}name={"<<<"}/> */}
        <div style={projectsContainer}>{projects}</div>
      </div>
    </>
  );
}

export default Projects;
