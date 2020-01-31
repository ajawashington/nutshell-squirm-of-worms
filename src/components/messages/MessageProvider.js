import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const MessageContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(res => res.json())
            .then(setMessages)
    }

    const addMessage = message => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
    }

    const deleteMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "DELETE",
        })
            .then(getMessages)
    }

    const updateMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getMessages()
    }, [])

    useEffect(() => {
        console.log("****  Message APPLICATION STATE CHANGED  ****")
    }, [messages])

    return (
        <MessageContext.Provider value={{
            messages, addMessage, deleteMessage, updateMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}