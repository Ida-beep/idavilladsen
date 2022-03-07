import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/WebVersion_Planets.loader.js",
  dataUrl: "Build/WebVersion_Planets.data.unityweb",
  frameworkUrl: "Build/WebVersion_Planets.framework.js.unityweb",
  codeUrl: "Build/WebVersion_Planets.wasm.unityweb",
  /* webGLContextAttributes: {
    alpha: true,
    antialias: true,
    depth: true,
    failIfMajorPerformanceCaveat: true,
    powerPreference: "high-performance",
    premultipliedAlpha: true,
    preserveDrawingBuffer: true,
    stencil: true,
    desynchronized: true,
    xrCompatible: true,
  }, */
});

function App() {
  return (
    <>
    <div>Hello World!</div>
    <Unity unityContext={unityContext}
        style={{
        height: "100%",
        width: 950,
        border: "2px solid black"}} />
    </>
  );
}

export default App;
