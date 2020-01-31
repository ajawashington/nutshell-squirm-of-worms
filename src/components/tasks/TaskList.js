import React, { useContext } from "react"
import { TaskContext } from "./TaskProvider"
import Task from "./Task"
import "./Tasks.css"

export default (props) => {
    const { tasks } = useContext(TaskContext)
    const activeTasks = tasks.filter(t => t.userId === parseInt(localStorage.getItem("nutshell_user")))
    console.log(tasks)

    return (
        <>
            <h1>Tasks</h1>
            <div className="tasks">
                {
                    
                    activeTasks.map(t => {

                        return <Task key={t.id} task={t} {...props} />
                        
                    }) 
                }

            </div>
        </>
    )
}