import React, {useState} from "react";
import Circle from "./Circle";

function Hover(props){
    const [pageTitle,setPageTitle] = useState("");
    const [showAbout,setShowAbout] = useState(false);
    const [showProject,setShowProject] = useState(false);
    const [showContact,setShowContact] = useState(false);

    const title={
        //display:"flex",
        //justifyContent:"center",
        marginTop:"43%",
        marginLeft:"40%",
        position:"absolute",
        zIndex:"300",
        color:"white",
        width:"10%",
        //border:"solid white 0.25px",
        fontFamily:"'Roboto Mono', monospace",
        fontStyle:"italic",
        padding:"25px",
    }

    function handleClick(e){
        console.log("set title to projects: ", e);
        props.planetClick(e);
    }

    return(
        <div>
        <Circle onClick={(e)=>handleClick(e)} mTop={"15%"} mLeft={"42%"} n={"3"} /* size={"300px"}  */showProjects={(e)=>setShowProject(e)} name={"projects"}></Circle>
        <Circle onClick={(e)=>handleClick(e)} mTop={"4%"} mLeft={"24%"} n={"1.5"} /* size={"150px"} */ showContact={(e)=>setShowContact(e)} name={"contact"}/>
        <Circle onClick={(e)=>handleClick(e)} mTop={"30%"} mLeft={"63%"} n={"1.5"} /* size={"150px"} */ showAbout={(e)=>setShowAbout(e)} name={"about"}/>
        {showProject? <h4 style={title}>Projects</h4> : <></>}
        {showAbout? <h4 style={title}>About</h4> : <></>}
        {showContact? <h4 style={title}>Contact</h4> : <></>}
        </div>
    );
}

export default Hover;