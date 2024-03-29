
// using icons as React components.
import {FaTimes}  from "react-icons/fa"
import PropTypes from 'prop-types';

const Task = ({task, onDelete,setReminder}) => {
  return (
    <div className={`task ${ task.reminder ? 'reminder' : ''}`} onDoubleClick={ ()=> {{setReminder(task.id)}}}>
        <h3 className="tasktext">
          {task.text }  
          
          <FaTimes style={{color:"red", cursor:'pointer'}}  onClick={()=>{{onDelete(task.id)}} }  /> 
          
        </h3>
        <p>{task.day } at {task.time}</p>

      {/* see local storage and session storage js for retaining info on web  page. */}
        

    </div>
  )
}
export default Task;

Task.propTypes={
    text : PropTypes.string,
    task : PropTypes.object,
    onDelete:PropTypes.func,
    setReminder: PropTypes.func,
}
