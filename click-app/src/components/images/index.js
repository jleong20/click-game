import React from "react";

const style ={
    image: {
        width: "200px",
        height: "200px",
        padding: "10px"
    }
}
function Image(props){
    return(
        <img style={style.image} onClick={()=>props.clicked(props.id)} alt={props.name} src={props.src}></img>
    );
}

export default Image;