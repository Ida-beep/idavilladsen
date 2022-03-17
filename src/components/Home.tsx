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
  const title = "Lorem Ipsum";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
    duration: 10000,
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
          <Header title={title} text={text} mLeft={40} mTop={"10%"} />
          <Hover planetClick={(n: string) => handlePlanetClick(n)} />
          {/* <BurgerMenu/> */}
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
