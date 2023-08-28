
// import PropTypes from 'prop-types'

const AddTask = () => {
  return (
    <>
      <form className="add-form">
        <div className="form-control-1">
          <label>Task</label>
          <input type="text" placeholder="Add Task" />
        </div>
        <div className="form-control-1">
          <label>Day & Time</label>
          <input type="text" placeholder="Add Day & Time" />
        </div>
        <div className="form-control-1-check">
          <label>Set Reminder</label>
          <input type="checkbox"  />
        </div>

        <input className=" task-btn" type="submit" value='Save Task' />
      </form>
    </>
  )
}

AddTask.propTypes = {}

export default AddTask