import React, { useState } from "react";

const NewBoxForm = props => {
    const INITIALFORMDATA = {
        background : "",
        height : "",
        width : ""
    }
    const [FormData, setFormData] = useState(INITIALFORMDATA)
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(d => ({
            ...d,
            [name] : value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.submit(FormData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="background"> Background Color </label>
                <input type="text" name="background" id="background" value={FormData.background} onChange={handleChange}/>
                <label htmlFor="width"> Width (px) </label>
                <input type="number" name="width" id="width" min="0"onChange={handleChange} value={FormData.width}/>
                <label htmlFor="height"> Height (px) </label>
                <input type="number" name="height" id="height" min="0"onChange={handleChange} value={FormData.height}/>
                <button>Add Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm