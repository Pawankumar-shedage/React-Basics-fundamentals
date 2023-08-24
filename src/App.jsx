// import { useState } from 'react'

import './App.css'
import { useState } from 'react';
// import FruitCart from './FruitCart';
import Fruits from './fruits';

function App() {
  
  function formatName(user)
  {
    return user.firstName + " " +user.lastName;
  }

  // user state.
  const [user,setUser] = useState({firstName : "Pawankumar", lastName :"Shedage"});
  function updateUser()
  {
    setUser({
      firstName: "Rajkumar",
      lastName:"Shedage"
    })
  }

  //data state
  const [data,setData] = useState("Pawan");
  function updateData(){
   setData("Rajkumar");
   
    alert(data);
  }

  // fruits/apple object
  const apple ={
    name:"apple",
    color:"red",
    qt:12,
  }
  


  // ------------return ------
  return (
    <>
      <div>
        <h1><i>HELLLO</i> {formatName(user)}  </h1>
        
        
        <Fruits 
        name = {apple.name}
        color = {apple.color}
        qt = {apple.qt}
        />
        <button onClick={updateData}>Update Data</button>
        <br></br>
        <button onClick={updateUser}>Change User</button>
        


      </div>  
    </>
  )
}

export default App
