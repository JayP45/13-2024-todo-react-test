import React, { useState } from 'react'

const Todolist = () => {
    const [inputTodo, setInputTodo] = useState('')
    const [todo, setTodo] = useState([])
    const [toggle, setToggle] = useState(true)
    const [editIndex, setEditIndex] = useState(null);
    const [completed, setCompleted] = useState(false);

    const dynamicStyle = {
        color: completed ? 'green' : 'black',
    };

    const addTodo = () => {
        if (!inputTodo) {
            alert('Fill something')
        }
        else if (inputTodo && !toggle) {
            setTodo(todo.map((item, index) => (index === editIndex ? inputTodo : item)));
            setToggle(true);
            setInputTodo('');
            setEditIndex(null);
        }
        else {
            setTodo((prev)=>[...prev,inputTodo])
            setInputTodo('')
            setToggle(false)
        }
    }

    const deleteTodo = (id) => {
        const deleteTodo = todo.filter((_, ind) => {
            return ind !== id
        })
        setTodo(deleteTodo)
        setToggle(true)
    }

    const editTodo = (id) => {
        const updatedTodo = todo.find((_, ids) => {
            return ids === id
        })
        setInputTodo(updatedTodo)
        setEditIndex(id);
    }
    

    return (
        <>
            <div>
                <h1>Create Your Todo!</h1>
                <input type='text' placeholder='Enter your todo' value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
                {
                    toggle ? <button onClick={addTodo}>Add</button> : <button onClick={addTodo}>Save</button>
                }
                {/* <button onClick={addTodo}>Add</button> */}
                {
                    todo.map((item, ind) => (
                        <div style={dynamicStyle} key={ind}>
                            {item}<button onClick={() => deleteTodo(ind)}>Delete</button><button onClick={() => editTodo(ind)}>Edit</button><input
                                type="checkbox"
                                checked={completed}
                                onChange={() => setCompleted(!completed)}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Todolist