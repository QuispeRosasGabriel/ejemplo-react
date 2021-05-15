import React from 'react'

const Task = ({nameTask}) => {
    console.log('3er nivel', nameTask)
    return (
        <div>
            {nameTask}
        </div>
    )
}

export default Task
