import React, { useState } from "react";

function Rectangle(props) {
  //const [size, setSize] = useState("200px");
  const text = {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: props.padding,
  };
  const rect = {
    width: props.sizeW,
    height: props.sizeH,
    //border: "white solid 1px",
    margin: "20px",
    //maxWidth: size,
    //minWidth: "100px",
    //position:"relative",
  };
  const img = {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    height: props.sizeH,
    width: props.sizeW,
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
        <img style={img} src={props.img} />
        {props.content}
      </div>
    </>
  );
}

export default Rectangle;
