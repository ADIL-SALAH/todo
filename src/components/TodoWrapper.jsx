import React, { useState, useEffect } from 'react'
import TodoForm from './todoForm'
import Todo from './todo'
import { v4 as uuidv4 } from 'uuid'
import EditTodoForm from './editTodoForm';
uuidv4();



function TodoWrapper() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        if (todo.trim().length === 0) {
            alert('please fill')
        }
        else {
            setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
            console.log(todos)
        }
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed
        } : todo))
    }

    const deleteTodo = id => { setTodos(todos.filter(todo => todo.id != id)) }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing
        } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    const clearAll = () => {
        setTodos([])
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!!</h1>
            <TodoForm addTodo={addTodo} clearAll={clearAll} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm key={todo.id} task={todo} editTodo={editTask} />
                ) : (< Todo task={todo} key={index}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />)

            ))}

        </div>
    )
}



export default TodoWrapper
