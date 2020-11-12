import React from "react";

function Image(props){
    return(
        <img onClick={()=>props.clicked(props.id)} src={props.src}></img>
    );
}

export default Image;