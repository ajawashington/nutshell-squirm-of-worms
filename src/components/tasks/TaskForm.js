import React, { useContext, useRef } from "react"
import { TaskContext } from "./TaskProvider"
import "./Tasks.css"

export default props => {
    const { addTask } = useContext(TaskContext)
    const taskText = useRef("")
    const taskCompletionDate = useRef("")

    const constructNewTask = () => {
    
        addTask({
            text: taskText.current.value,
            completionDate: taskCompletionDate.current.value,
            userId: parseInt(localStorage.getItem("nutshell_user"), 10)
        })
        .then(() => props.history.push("/"))
    }
    

    return (
        <form className="TaskForm">
            <h2 className="TaskForm__title">Add Task</h2>
            <fieldset>

                <div className="form-group">
                    <label htmlFor="text">Task</label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        ref={taskText}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="What do you need to get done?"
                        />
                </div>

            </fieldset>
            <fieldset>
                        
            <div className="form-group">
                <label htmlFor="completionDate">Completion Date</label>
                <input
                    type="date"
                    id="completionDate"
                    name="completionDate"
                    ref={taskCompletionDate}
                    required
                    className="form-control"
                    />
            </div>
                    </fieldset>
                   
            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewTask()
                    }}
                className="btn btn-primary">Submit</button>
        </form>
    )
}