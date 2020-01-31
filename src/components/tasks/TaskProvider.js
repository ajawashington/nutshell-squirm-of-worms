import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const TaskContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
            .then(res => res.json())
            .then(setTasks)
    }

    const addTask = task => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(getTasks)
    }

    const deleteTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "DELETE",
        })
            .then(getTasks)
    }


    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getTasks()
    }, [])

    useEffect(() => {
        console.log("****  task APPLICATION STATE CHANGED  ****")
    }, [tasks])

    return (
        <TaskContext.Provider value={{
            tasks, addTask, deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}