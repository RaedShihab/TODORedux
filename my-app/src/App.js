import React from 'react';
import Task from './task';
import CreateTask from './createTask'
import './App.css';

class App extends React.Component {
  state= {
    arr: [],
    newTask: "",
  }

  handleChangeNewTask = (event) => {
    this.setState({
      newTask: event.target.value,
      
    })
    console.log(this.state.newTask)
  }

  addTask = () => {
    const todoArr1 = [...this.state.arr]
     todoArr1.push({text: this.state.newTask})
     this.setState({
       arr: todoArr1
     })
  } 

  deleteTask = (index) =>  {
    const todosArr = [... this.state.arr]
    todosArr.splice(index, 1)
    this.setState({
      arr: todosArr,
    })
  }
  
  render() {
  return (
       <div className="App">
        {this.state.arr.map((task, index)=>   
          <Task index={index} task={task} key={index} deleteTask={this.deleteTask}/>
        )}
          <CreateTask handleChangeNewTask={this.handleChangeNewTask} state={this.state} addTask={this.addTask}/>
      </div>
    )
  } 
}

export default App;
