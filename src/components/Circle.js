import React, { useEffect, useState } from "react";

function Circle(props){
    const [name,setName] = useState("");

    /*useEffect(()=>{
        setName(props.name)
    },[])
    useEffect(()=>{
        console.log(name);
    },[name]) */
    
    const hoverStyle={
        width:"100px",
        height:"100px",
        borderRadius:"50%",
        /* backgroundColor:"red", */
        //border:"white 2px solid",
        marginTop:props.mTop,
        marginLeft:props.mLeft,
        position:"absolute",
        zIndex:"200",
        transform:`scale(${props.n})`,
    }

    function handleHover(){
        if(props.name==="projects"){
            props.showProjects(true);
        } else if (props.name==="contact"){
            props.showContact(true);
        } else if (props.name==="about"){
            props.showAbout(true);
        }
    }
    function handleHoverEnd(){
        if(props.name==="projects"){
            props.showProjects(false);
        } else if (props.name==="contact"){
            props.showContact(false);
        } else if (props.name==="about"){
            props.showAbout(false);
        }
    }
    function handleClick(){
        console.log("clicked on something");
        props.onClick(props.name);
    }
    return(
        <>
        <div onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHoverEnd} style={hoverStyle}></div>
        </>
    );
}

export default Circle;