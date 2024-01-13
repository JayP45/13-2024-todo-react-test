import React, { useState } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState('')
    const [allTodo, setAllTodo] = useState([])
    const [toggle, setToggle] = useState(true)
    const [editId, setEditId] = useState(null)
    const [completed, setCompleted] = useState(false)

    const customCss = {
        color: "green"
    }

    const addTodo = () => {
        if (!todo) {
            alert('write something')
        } 
            else if(todo && !toggle){
                    setAllTodo(allTodo.map((item, index) => (index === editId ? allTodo : item)));    
            }
        else {
            setAllTodo((prev) => [...prev, todo])
            setTodo('')
            
        }

    }

    const deleteTodo = (id) => {
        const deletedTodo = allTodo.filter((_, index) => {
            // console.log(index)
            return id !== index
        })
        setAllTodo(deletedTodo)
    }

    const editTodo=(id)=>{
        const editedTodo = allTodo.find((_,id)=>{
            return id === id
        })
        setTodo(editedTodo)
        setEditId(id)
        setToggle(false)
    }

    return (
        <>
            <div>
                <h1>Create Your Todo!</h1>
                <input type='text' placeholder='Enter your todo...' value={todo} onChange={(e) => setTodo(e.target.value)} />
                {
                    toggle ? <button onClick={addTodo}>Add</button> : <button onClick={addTodo}>Save</button>
                }
                {
                    allTodo.map((item, index) => {
                        return <>
                            <div key={index}>
                                <ul>
                                    <li>
                                        {item}<button onClick={() => deleteTodo(index)}>Delete</button><button onClick={editTodo}>Edit</button><input type='checkbox' />
                                    </li>
                                </ul>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}

export default TodoList