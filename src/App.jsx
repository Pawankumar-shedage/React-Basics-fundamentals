// import { useState } from 'react'

import './App.css'
import { useState } from 'react';
// import FruitCart from './FruitCart';
// import Fruits from './fruits';
import { Button } from './ButtonComp/button';
import  Tasks  from './tasksComp';

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
      firstName: ["Rajkumar"],
      lastName:"Shedage"
    });

    alert("User updated");
  }

  //data state
  const [data,setData] = useState("Pawan");
  function updateData(){
   setData("Rajkumar");
   
    alert(data);
  }

  // fruits/apple object  props.done✅
  const apple ={
    name:"apple",
    color:"orange",
    qt:12,
    fresh:false,
    pricePerPiece:18,
  }


  // use state for objects:

  const [car,setCar] = useState({
        brand:"Toyota",
        model:"Inova High-Cross",
        color:"Maroon",
        year:"2022",
  });

  const changeCar = ()=>{

    setCar(previousState =>{
      return{...previousState,year:"1997"}
    })
  }
  
  


  // ------------return ------
  return (
    <>
      <div className='container'>
        <h1><i>HELLLO</i> {formatName(user)}  </h1>
        
        
        {/* <Fruits  //child component, fruits
          {...apple}
        /> */}

        {/* Car */}
        {/* <div className="cardiv">
          <h1>My Car</h1>
            <p style={getp}>
              Car <b>{car.brand}</b>.  Model: {car.model} of color {car.color} and from {car.year}
            </p>

            <Button onClick={changeCar}  text='Change data' color='red' ></Button>
        </div> */}
        {/* <br/>

        <Button  onClick={updateData} text='Update Data' ></Button>
        
        <Button  onClick={updateUser} text='Change User'></Button>
        <br/><br/> */}

        {/* my button component */}
        {/* <Button click1={updateData}   text="Component Button"  color="purple"/> */}

        {/* here default props will work */}
        <br/> 
        
        {/* Tasks COmponent */}
        <Tasks />
        <Button />
      </div>  
    </>
  )
}


// const getp = {
//   color:"red",
//   backgroundColor:"#fff",
// }


export default App
