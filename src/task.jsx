
// using icons as React components.
import {FaTimesCircle}  from "react-icons/fa"
import PropTypes from 'prop-types';

const Task = ({task, onDelete,setReminder}) => {
  return (
    <div className={`task ${ task.reminder ? 'reminder' : ''}`} onDoubleClick={ ()=> {{setReminder(task.id)}}}>
        <h3 >
          {task.text }  
          
          <FaTimesCircle style={{color:"red", cursor:'pointer'}}  onClick={()=>{{onDelete(task.id)}} }  /> 
        </h3>
        <p>{task.day}</p>

        

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
