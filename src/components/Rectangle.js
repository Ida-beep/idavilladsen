import React, { useState } from "react";

function Rectangle(props) {
  const [size, setSize] = useState("200px");
  const text = {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  };
  const rect = {
    width: size,
    height: size,
    border: "white solid 1px",
    margin: "20px",
    //maxWidth: size,
    //minWidth: "100px",
    //position:"relative",
  };
  function handleHover() {
    //setSize("250px");
    console.log("hover");
  }
  function handleHoverEnd() {
    //setSize("200px");
    console.log("hover");
  }

  return (
    <>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
        style={rect}
      >
        <p style={text}>{props.name}</p>
      </div>
    </>
  );
}

export default Rectangle;
