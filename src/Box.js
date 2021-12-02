import React from "react";
import "./box.css"

const Box = props => {
    const style = {
        backgroundColor: props.bg,
        height : props.height,
        width : props.width
    }
    return (
    <div className="box" style={style}></div>
    )
}

export default Box