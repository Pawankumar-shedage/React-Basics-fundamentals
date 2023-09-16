/* eslint-disable no-unused-vars */
// import { useState } from 'react'

import './App.css'
import { useEffect, useState } from 'react';
// import FruitCart from './FruitCart';
// import Fruits from './fruits';
import { Button } from './Components/button';
import  Tasks  from './Components/tasksComp';
import AddTask from './Components/AddTask';
import Header from './Components/classComp';
import Task from './task';
import { Goal, PracticeComp } from './Components/practiceComponent';
import { AppHeader } from './Components/Header';

function App() {
  
  // function formatName(user)
  // {
  //   return user.firstName + " " +user.lastName;
  // }

  // user state.
  // const [user,setUser] = useState({firstName : "Pawankumar", lastName :"Shedage"});
  // function updateUser()
  // {
  //   setUser({
  //     firstName: ["Rajkumar"],
  //     lastName:"Shedage"
  //   });

  //   alert("User updated");
  // }

  // //data state
  // const [data,setData] = useState("Pawan");
  // function updateData(){
  //  setData("Rajkumar");
   
  //   alert(data);
  // }

  // // fruits/apple object  props.done✅
  // const apple ={
  //   name:"apple",
  //   color:"orange",
  //   qt:12,
  //   fresh:false,
  //   pricePerPiece:18,
  // }


  // // use state for objects:

  // const [car,setCar] = useState({
  //       brand:"Toyota",
  //       model:"Inova High-Cross",
  //       color:"Maroon",
  //       year:"2022",
  // });

  // const changeCar = ()=>{

  //   setCar(previousState =>{
  //     return{...previousState,year:"1997"}
  //   })
  // }


  // TASKS
  const [tasks,setTask] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true
    },
    {
        id:3,
        text: "For the walk",
        day: "Feb 6th at 1:30pm",
        reminder: false
    }
]);
  
  //Add task
  const addTask = (task)=>{
    // we have to add id manually.
    const id = Math.floor(Math.random() * 1000 )+1;
    const newTask = {id, ...task};
    setTask([...tasks,newTask])
    console.log(task)
  }


  // Delete Task
  const deleteTask = (id)=>{
            //we use filter() of array here to show all the tasks other than the task having id -passed in the function.
    setTask(tasks.filter((task)=> task.id !== id ) );

  }

 
  const reminderForTask= (id)=>{
    setTask(tasks.map((task)=> 
    task.id === id ?  {...task,reminder: !task.reminder} : task)
    )

    // ----mine
    // const getItem = document.querySelector(".task");
    // tasks.reminder?  getItem.classList.add("reminder") : tasks;
    // console.log(tasks.map((task) => task.id == id ? task.reminder : ''))
    
  }


  const [showAddTask,setShowTask] = useState(true);




  // ------------return ------
  return (
    <>
      <div className='container'>

        
        <AppHeader text={"Task Tracker"} 
          onAdd={()=>{setShowTask(!showAddTask)}} showAdd={showAddTask}
        />
        
        {showAddTask && <AddTask onAdd={addTask} />}

        <br />
        {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete= {deleteTask}  
          setReminder={reminderForTask}/> : "No Tasks to show." }
        <br/>

        
      </div>  
    </>
  )
}


// const getp = {
//   color:"red",
//   backgroundColor:"#fff",
// }


export default App
