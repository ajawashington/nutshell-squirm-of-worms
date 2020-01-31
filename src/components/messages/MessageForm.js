import React, { useContext, useState, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"

export default props => {
    const { addMessage, updateMessage, messages } = useContext(MessageContext)
    const [message, setMessage] = useState({})

    const editMode = props.match.params.hasOwnProperty("messageId")

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newMessage = Object.assign({}, message)
        newMessage[evt.target.name] = evt.target.value
        console.log(newMessage)
        setMessage(newMessage)
    }

    const setDefaults = () => {
        if (editMode) {
            const messageId = parseInt(props.match.params.messageId)
            const selectedMessage = messages.find(m => m.id === messageId) || {}
            setMessage(selectedMessage)
            console.log(selectedMessage)
        
        }
    }

    useEffect(() => {
        setDefaults()
    }, [messages])

    const constructNewMessage = () => {
        if (editMode) {
            updateMessage({
                id: message.id,
                text: message.text,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })
                .then(() => props.history.push("/"))
        } else {
            addMessage({
                text: message.text,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10), 
                date:Date.now()
            })
            .then(() => props.history.push("/"))
        }
        }
    


    return (
        <form className="messageForm">
            <h2 className="messageForm__title">{editMode ? "Edit Message" : "New Message"}</h2>
            <fieldset>

            <div className="form-group">
                <label htmlFor="messageName">Message text</label>
                <input
                    type="text"
                    id="messageName"
                    name="text"
                    defaultValue={message.text}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Message name"
                    proptype="varchar"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
                   

            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewMessage()
                    }}
                className="btn btn-primary"> {editMode ? "Update Message": "Make Message"} </button>
        </form>
    )
}