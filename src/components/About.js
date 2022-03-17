import React from "react";
import PlanetButton from "./PlanetButton";
import Rectangle from "./Rectangle";
import Header from "./Header";

function About(props) {
  const title = {
    color: "white",
    display: "flex",
    justifyContent: "center",
    margin: "50px",
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
    props.setShowAbout(props.showPlanets);
    //props.showAbout(props.showAbout);
  } */

  return (
    <>
      <div style={page}>
        <h3 style={title}>About</h3>
        <Header
          mTop={"20%"}
          mLeft={"0%"}
          title={"interaction design, software design, spatial design"}
          text={"Bachelor of Arts in Architecture Master of Science in IT"}
        />
        {/* <PlanetButton onClick={(e)=>handleClick(e)}name={"<<<"}/> */}
      </div>
    </>
  );
}

export default About;
