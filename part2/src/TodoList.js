import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [Todos, setTodos] = useState([])
    const [Id, setId] = useState(0)

    const newTodo = (todo) => {
        let newTodo = {...todo, id: idx() }
        setTodos(todos => [...Todos, newTodo])
    }

    const idx = () => {
        setId(Id + 1)
        return Id
    }

    const remove = (id) => {
        setTodos(Todos.filter(t=> t.id !== id))
    }
    return (
        <div>
            <NewTodoForm addTodo={newTodo}/>
            {Todos.map(t => <Todo title={t.title} desc={t.desc} key={t.id} id={t.id} remove={remove}/>
            )}
        </div>
    )
}

export default TodoList