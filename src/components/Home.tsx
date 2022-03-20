import React, { useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Header from "./Header";
import Hover from "./Hover";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { useSpring, animated } from "react-spring";
const startPage = new UnityContext({
  loaderUrl: "Jar/OnlyJar.loader.js",
  dataUrl: "Jar/OnlyJar.data.unityweb",
  frameworkUrl: "Jar/OnlyJar.framework.js.unityweb",
  codeUrl: "Jar/OnlyJar.wasm.unityweb",
});

function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPlanets, setShowPlanets] = useState(true);
  const title = "Ida Villadsen";
  const text =
    "Combining 2D & 3D design with IT. With a background in arhictecture I have a keen interest in people, and how programs can help us in various domains. Have a look around ";

  function handlePlanetClick(name: string) {
    console.log("move to next page : ", name);
    if (name === "projects") {
      setShowProjects(true);
    } else if (name === "contact") {
      setShowContact(true);
    } else if (name === "about") {
      setShowAbout(true);
    }
    setShowPlanets(false);
  }
  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 4000,
    config: { mass: 6, tension: 400, friction: 1000 },
    reset: true,
  });

  return (
    <>
      <div>
        {showAbout ? (
          <About
            setShowAbout={(e: boolean) => setShowAbout(e)}
            showAbout={showAbout}
            setShowPlanets={(e: boolean) => setShowPlanets(e)}
            showPlanets={setShowPlanets}
          />
        ) : (
          <></>
        )}
        {showContact ? (
          <Contact
            setShowContact={(e: boolean) => setShowContact(e)}
            showContact={showContact}
            setShowPlanets={(e: boolean) => setShowPlanets(e)}
            showPlanets={setShowPlanets}
          />
        ) : (
          <></>
        )}
        {showProjects ? (
          <Projects
            setShowProjects={(e: boolean) => setShowProjects(e)}
            showProjects={showProjects}
            setShowPlanets={(e: boolean) => setShowPlanets(e)}
            showPlanets={setShowPlanets}
          />
        ) : (
          <></>
        )}
      </div>
      {showPlanets ? (
        <>
          <Header title={title} text={text} mLeft={40} mTop={"10%"} maxWidth={"250px"}/>
          <Hover planetClick={(n: string) => handlePlanetClick(n)} />
          <animated.div style={fadeIn}>
            <Unity
              unityContext={startPage}
              style={{ height: "100%", width: "100%" }}
            />
          </animated.div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Home;
