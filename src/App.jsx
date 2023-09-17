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
  const [tasks,setTask] = useState([]);
  
  useEffect(()=>{
    const getTasks = async ()=>{
      const tasksFromServer  = await fetchTasks()
      setTask(tasksFromServer)
    }

    getTasks()
  }, [])

  //Fetch Tasks.
  const fetchTasks = async ()=>{
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  //Fetch Task
  const fetchTask = async (id)=>{
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()

    return data
  }

  //Add task
  const addTask = async (task)=>{

    //on server
    const response = await fetch('http://localhost:5000/tasks', 
      {
        method:'POST',
        headers: {
          'Content-type' : 'application/json', 
        },
        body: JSON.stringify(task)
      }
    )

    const data =  await response.json()
    setTask([...tasks,data])
    
    // we have to add id manually.
    // const id = Math.floor(Math.random() * 1000 )+1;
    // const newTask = {id, ...task};
    // setTask([...tasks,newTask])
    // console.log(task)
  }


  // Delete Task
  const deleteTask = async (id)=>{

    //deleting from the server.
    await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method:'DELETE',
      }  
    )

    //we use filter() of array here to show all the tasks other than the task having id -passed in the function.
    setTask(tasks.filter((task)=> task.id !== id ) );

  }

  //

  //Toggle Reminder
  const toggleReminder= async (id)=>{
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const response = await fetch(`http://localhost:5000/tasks/${id}`, 
      {
        method:'PUT',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(updTask)
        
      }  
    )

    const data = await response.json()

    setTask(tasks.map((task)=> 
    task.id === id ?  {...task,reminder: !data.reminder} : task)
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

        
        <AppHeader text="Task Tracker" 
          onAdd={()=>{setShowTask(!showAddTask)}} showAdd={showAddTask}
        />
        
        {showAddTask && <AddTask onAdd={addTask} />}

        <br />
        {tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete= {deleteTask}  
          setReminder={toggleReminder}/> : "No Tasks to show." }
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
