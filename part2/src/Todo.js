import React from "react";

const Todo = props => {
    const remove = () => {
        props.remove(props.id)
    }
    return (
        <div>
            <p><b>{props.title}</b></p>
            <p>{props.desc}</p>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo