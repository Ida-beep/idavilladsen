import React from "react";
import PlanetButton from "./PlanetButton";

function Contact(props) {
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
    props.setShowContact(props.showPlanets);
    //props.setShowContact(props.showContact);
  } */

  return (
    <>
      <div style={page}>
        <h3 style={title}>Contact</h3>
        {/* <PlanetButton onClick={(e)=>handleClick(e)}name={"<<<"}/> */}
      </div>
    </>
  );
}

export default Contact;
