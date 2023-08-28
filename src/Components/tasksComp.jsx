import  Task  from "../task";
import PropTypes from 'prop-types'



const Tasks = ({tasks, onDelete,setReminder}) => {
    
    return(
        // <> frangments
        <> 
            <div>
                <strong >Tasks for the day</strong>
                 
                {tasks.map((item) => 
                (
                    //passing each task as a prop
                    <Task key={item.id} task={item}  onDelete={onDelete} setReminder={setReminder} ></Task>
                )                  
                
                )}
           </div>

        </>
    )
}

Tasks.propTypes= {
    tasks: PropTypes.array,
    onDelete: PropTypes.func,
    setReminder:PropTypes.func,
}
export default Tasks;