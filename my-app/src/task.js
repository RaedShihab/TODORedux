import React from 'react'

function Task(props) {
    const index= props.index
    const task= props.task
    const deleteTask = props.deleteTask
    return(
      <div>
        <li >
            {task.text}
            <button onClick={()=> deleteTask(index)}>Done</button>
            </li>
      </div>
    )
  }

  export default Task;