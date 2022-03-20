import React from "react";
import { useSpring, animated } from "react-spring";

function Header(props) {
  const moveRight = useSpring({
    /* to: { marginLeft: props.mLeft },
    from: { marginLeft: 500 }, */
    /* to: { marginLeft: 500 },
    from: { marginLeft: 500 }, */
    delay: 1500,
    config: { mass: 2, tension: 400, friction: 200 },
    display: "flex",
  });
  const appear = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 4000 },
    display: "flex",
  });

  const appearSecond = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
    config: { mass: 2, tension: 400, friction: 200 },
    display: "flex",
  });

  const headerContainer = {
    marginLeft: window.innerWidth / 1.75,
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    zIndex: "100",
    width: "20%",
    marginTop: /* props.mTop, */ window.innerHeight / 3.5,
    border: "solid white 0.25px",
    fontFamily: "'Roboto Mono', monospace",
    color: "white",
    fontStyle: "italic",
    padding: "25px",
    maxWidth: props.maxWidth,
    minWidth: "200px",
    backgroundColor: "rgb(0,0,0,0.1)",
  };

  const headerStyle = {
    display: "flex",
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
