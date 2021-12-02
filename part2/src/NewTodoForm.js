import React, { useState } from "react";

const NewTodoForm = ({addTodo}) => {
    const INITIALFORMDATA = {
        title: "",
        desc: ""
    }
    const [formData, setFormData] = useState(INITIALFORMDATA)
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(t => ({
            ...t,
            [name] : value
        }))
    }
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> Title </label>
                <input 
                type="text" 
                name="title" 
                id="title" 
                value={formData.title}
                onChange={handleChange}
                />
                
                <label htmlFor="desc"> Description </label>
                <input 
                type="text" 
                name="desc" 
                id="desc"
                value={formData.desc}
                onChange={handleChange}
                />
                <button> Add Todo </button>
            </form>
        </>
    )
}

export default NewTodoForm