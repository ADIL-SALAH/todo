import { faAlignCenter, faAlignJustify, faAlignRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'

function todoForm({ addTodo, clearAll }) {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }

    return (
        <>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input type="text" className='todo-input' placeholder='What is the task today?' value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button type='submit' className='todo-btn'>Add Task</button>
                <br />
                <button className='todo-btn' type='button' onClick={() => clearAll()}> Clear all</button>

            </form >
        </>
    )
}

export default todoForm
