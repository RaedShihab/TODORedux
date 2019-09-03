import React from 'react'

function CreateTask(props) {
    const handleChangeNewTask = props.handleChangeNewTask
    const state = props.state
    const addTask = props.addTask
     return (
       <div>
         <input type="text" onChange={handleChangeNewTask} value={state.newTask} /> 
             <button onClick={addTask}>
               Add Task
             </button>
       </div>
     )
   }

   export default CreateTask;