import React from "react";
import { useSpring, animated } from "react-spring";

function Header(props) {
  const moveRight = useSpring({
    to: { marginLeft: props.mLeft },
    from: { marginLeft: 500 },
    delay: 1500,
    config: { mass: 2, tension: 400, friction: 200 },
  });
  const appear = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 4000 },
  });

  const appearSecond = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
    config: { mass: 2, tension: 400, friction: 200 },
  });

  const headerContainer = {
    position: "absolute",
    zIndex: "100",
    width: "20%",
    //marginLeft:props.mLeft,
    marginTop: props.mTop,
    border: "solid white 0.25px",
    fontFamily: "'Roboto Mono', monospace",
    color: "white",
    fontStyle: "italic",
    padding: "25px",
    maxWidth: "250px",
    minWidth: "200px",
  };
  /*     const inFront = {
        position:"absolute",
        zIndex:"500",
        widht:"100%",
    } */

  const headerStyle = {
    display: "flex",
    //padding:"20px",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <animated.div style={appear}>
      <animated.div style={moveRight}>
        <div style={headerContainer}>
          <animated.div style={appearSecond}>
            <h3 style={headerStyle}>{props.title}</h3>
            <p>{props.text}</p>
          </animated.div>
        </div>
      </animated.div>
    </animated.div>
  );
}

export default Header;
