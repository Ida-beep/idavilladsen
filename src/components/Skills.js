import React from "react";

function Skills(props) {
  /* const listStyle = {
    //listStyle: "none",
    //marginRight: "30px",
    //fontSize: "12px",
    //color: "white",
    width: props.width,
    height: props.height,
  }; */
  const skillsStyle = {
    //color: "white",
    //marginRight: "12px",
    //fontSize: "12px",
    //border: "white solid 2px",
  };
  return (
    //<div style={skillsStyle}>
    <h5 className={"changeColorHover"} /* style={skillsStyle} */>
      {props.skill}
      {/* <ul style={listStyle}>
      <li>
        Java, React, Javascript, HTML, CSS, SQL, GIT Figma, Illustrator,
        InDesign, PhotoShop, Premiere Pro Unity, C#, Valve Index, SteamVR,
        Oculus Rhino, Sketchup, Blender
      </li>
  </ul> */}
    </h5>
    //</div>
  );
}

export default Skills;
