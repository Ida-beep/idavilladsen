import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

function PlanetButton(props){
    const [buttonColor,setButtonColor] = useState("black");
    const [textColor,setTextColor] = useState("white");

    const button = {
        border:"white solid 1px",
        display:"flex",
        justifyContent:"center",
        width:"50px",
        backgroundColor:buttonColor,
        color:textColor,
        padding:"5px",
    }

    function handleHover(){
        setButtonColor("white");
        setTextColor("black");
    }
    function handleHoverExit(){
        setButtonColor("black");
        setTextColor("white");
        console.log("exit");
    }
    function handleClick(){
        props.onClick(props.name);
    }

    return(
    <>
        <Button onClick={handleClick}style={button}onMouseLeave={handleHoverExit} onMouseEnter={handleHover}>{props.name}</Button>
    </>
    );
}

export default PlanetButton;