import React from 'react'
import Task from './Task'

const TodoList = ({ tasks = [] }) => {
    console.log(tasks)
    return (
        <>
            {
                tasks.map((task, idx) => {
                    console.log('aca', task)
                    return (
                        <Task key={idx} nameTask={task} />
                    )
                }
                )
            }
        </>
    )
}

export default TodoList
