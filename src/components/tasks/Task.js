import React, { useContext, useState } from "react"
import "./Tasks.css"
import { TaskContext } from "./TaskProvider";

export default ({ task, history }) => {
    const { deleteTask } = useContext(TaskContext)
    const [hideText, setHideText] = useState(true);
//write a function that returns either the string hidden or a blank string based on state
//write a function that returns the entire component, or just the unhidden part, based on state 

    const hideTask = () => {
        if (hideText === true){
            
            return(
                
            <section className="task">
        
                <input type="checkbox" className="" id={ `task--${task.id}` }
        
                    onClick={
                    () => {
                        setHideText(false)
                        .then(() => {
                            history.push("/")            
                        })
                    }}
                />
        
                <div className="task__text">{ task.text }</div>
                
                <button onClick={
                    () => {
                        deleteTask(task)
                        .then(() => {
                            history.push("/")            
                        })
                    }}>
                    Delete Task
                </button>
        
            </section>
        
        )
        } else {
            return("")
        }
        
    }
    hideTask()

}
