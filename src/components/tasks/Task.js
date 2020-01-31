import React, { useContext, useState } from "react"
import "./Tasks.css"
import { TaskContext } from "./TaskProvider";

export default ({ task, history }) => {
    const { deleteTask, updateTask } = useContext(TaskContext)

        const completedTask = () => {
            
            updateTask({
                id: task.id,
                text: task.text,
                completionDate: task.completionDate,
                isCompleted: true, 
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })

        }

            return(
                
            <section className="task">
        
                <input type="checkbox" className="" id={ `task--${task.id}` }
        
                    onClick={
                    () => {
                        completedTask()
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


}
