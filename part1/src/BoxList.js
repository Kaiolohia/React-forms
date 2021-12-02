import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
    const [Boxes, setBoxes] = useState([])
    const [Id, setId] = useState(0)
    const addBox = box => {
        let newBox = {...box, id: idx()}
        setBoxes(boxes => [...boxes, {newBox}])
    }
    const idx = () => {
        setId(Id + 1)
        return Id
    }
    const remove = (id) => {
        console.log(Boxes)
        console.log(id)
        setBoxes(Boxes.filter(b => b.newBox.id !== id))
    }

    return (
        <>
            <NewBoxForm submit={addBox}/>
            {Boxes.map(b => (
                <Box bg={b.newBox.background} width={`${b.newBox.width}px`} height={`${b.newBox.height}px`} key={b.newBox.id} id={b.newBox.id} remove={remove}/>
            ))}
        </>
    )
} 


export default BoxList