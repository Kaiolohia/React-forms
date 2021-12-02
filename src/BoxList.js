import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
    const [Boxes, setBoxes] = useState([])
    const addBox = box => {
        setBoxes(boxes => [...boxes, {box}])
    }
    return (
        <>
            <NewBoxForm submit={addBox}/>
            {Boxes.map(b => (
                <Box bg={b.box.background} width={`${b.box.width}px`} height={`${b.box.height}px`} key={1}/>
            ))}
        </>
    )
} 


export default BoxList