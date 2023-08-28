
import PropTypes from 'prop-types'
import { useState } from "react"

const AddTask = ({onAdd}) => {

  const [text, setText] = useState("");
  const [day,setDay] = useState("")
  const [reminder,setReminder] = useState(false)
  
  const onSubmit =(e)=>
  {
    e.preventDefault(); //to prevent submittin form info to page.

    if(!text)
    {
      alert("Please enter task");
      return;
    }

    onAdd({text,day,reminder});
    setText('')
    setDay('')
    setReminder(false);


  }
  return (
    <>
      <form className="add-form"  onSubmit={onSubmit}>
        <div className="form-control-1">
          <label>Task</label>
          <input type="text" placeholder="Add Task" spellCheck="false" value={text}  
              onChange={(e)=> {setText(e.target.value)}}/>
        </div>

        <div className="form-control-1">
          <label>Day & Time</label>
          <input type="text" placeholder="Add Day & Time" value={day}
            onChange={(e)=>{setDay(e.target.value)}} />
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



