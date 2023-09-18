
import PropTypes from 'prop-types'
import {  useState } from "react"


const AddTask = ({onAdd}) => {

  const [text, setText] = useState("")
  const [day,setDay] = useState("")
  const [time,setTime] = useState("")
  const [reminder,setReminder] = useState(false)
  
  const onSubmit =(e)=>
  {
    e.preventDefault(); //to prevent submittin form info to page.

    if(!text)
    {
      alert("Please enter task");
      return;
    }

    onAdd({text,day,time,reminder});
    setText('')
    setDay('')
    setTime('')
    setReminder(false);


  }

  //to change inp type from one state to another
    // const [inputType, setInputType] = useState('text')

    // const handleFocus = ()=>{
    //   setInputType('date')
    // }



  return (
    <>
      <form className="add-form"  onSubmit={onSubmit}>
        <div className="form-control-1">
          <label>Task</label>
          <input type="text" className='form-control' placeholder="Add Task" spellCheck="false" value={text}  
              onChange={(e)=> {setText(e.target.value)}} 
          />
        </div>

        <div className="form-control-1">
          <label>Day </label>
          
          <input 
            className='form-control' 
            type="text" 
            placeholder="Add Day & Date"  
            value={day}
            onChange={(e)=>{setDay(e.target.value) }}  
            required 
          />
          
          <label >Time</label>
          <input 
            type="time" 
            className='form-control'
            value={time} 
            onChange={(e) => {setTime(e.target.value) }}
          />
        </div>

        <div className="form-control-1-check">
          <label>Set Reminder</label>
          <input type="checkbox"  checked={reminder}
          value={reminder}
            onChange={(e)=> {
              setReminder(e.currentTarget.checked);
            }} />
        </div>

        <input className=" task-btn" type="submit" value='Save Task' />
      </form>
    </>
  )
}

AddTask.propTypes = {
  onAdd : PropTypes.func,
}

export default AddTask



