import React from "react";
import { useSpring, animated } from 'react-spring'

function BlackFade(){
    const page={
        width:"100%",
        height:"100%",
        backgroundColor:"black",
        zIndex:"10",
        position:"absolute",
    }
    const props = useSpring({ to: { opacity: 0 }, from: { opacity: 1 }, delay: 3000,},);
    
    return(<animated.div style={props}>
        <div style={page}>hello</div>
        </animated.div>);
}

export default BlackFade;