import React, { useEffect } from "react";
//import Img from "../assets/1C91FF70-CCD4-4642-A27C-A8B45EB001FF_1_105_c.jpeg";
import Img from "../assets/D0AFC57D-6015-4BA7-BFDF-1FDCCBD76C0E_1_201_a.jpeg";
import Rectangle from "./Rectangle";
import Skills from "./Skills";

function About(props) {
  const skills = [
    "Java",
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "SQL",
    "GIT",
    "Figma",
    "Illustrator",
    "InDesign",
    "PhotoShop",
    "Premiere Pro",
    "Unity",
    "C#",
    "Valve Index",
    "SteamVR",
    "Oculus",
    "Rhino",
    "Sketchup",
    "Blender",
  ];
  const skillsPlotted = skills.map((e, index) => (
    <Skills key={index} skill={e} width={"300px"} />
  ));

  /*   useEffect(() => {
    console.log(skillsPlotted);
  }, []); */

  const title = {
    color: "rgb(199, 199, 199)",
    display: "flex",
    justifyContent: "center",
    margin: "50px",
  };
  const page = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  };
  const img = {
    width: "280px",
    height: "270px",
    marginRight: "50px",
  };
  const skillsStyle = {
    display: "flex",
    width: "250px",
    //overflow: "scroll",
    //overflowX: "break",
    flexWrap: "wrap",
    //height: "50px",
    marginRight: "120px",
    padding: "2 0px",
    border: "solid white 1px",
  };
  const columns = {
    display: "flex",
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  };

  const row = {
    display: "flex",
    flexDirection: "row",
    //margin: "20px",
    //padding: "20px",
    margin: "10px",
  };
  const cv = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "300",
  };
  const year = {
    color: "rgb(255,255,255,0.6)",
    fontSize: "10px",
  };

  return (
    <>
      <div style={page}>
        <h5 style={title}>about me</h5>
        <div style={row}>
          <div style={columns}>
            <img style={img} src={Img} />
            <h5>
              <p style={year}>2020-2022</p>
              <p style={cv}>ITU, Master of Science in IT, Software Design</p>
              <p style={year}>2019-2020</p>
              <p style={cv}>Christensen & Co. Architects</p>
              <p style={year}>2016-2019 </p>{" "}
              <p style={cv}>KADK, Bachelor of Arts in Architecture</p>
              <p style={year}>2015-2016 </p>
              <p style={cv}>MODUS Tegneskole</p>
              <p style={year}>2015-2016 </p>
              <p style={cv}>RUC, Samfundsvidenskabelig Bachelor</p>
            </h5>
          </div>
        </div>
        <div style={columns}>
          <div style={skillsStyle}>{skillsPlotted}</div>
          <Rectangle /* content={"hello"} */ sizeW={"200px"}></Rectangle>
        </div>
      </div>
    </>
  );
}

export default About;
