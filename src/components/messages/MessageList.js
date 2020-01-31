import React, { useContext } from "react"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"
import Message from "./Message"

export default (props) => {

    const { messages } = useContext(MessageContext)
  
    console.log("all messages",messages)

    const filteredMessages = messages.sort((a, b) => b.date - a.date)
    console.log("filtered messages", filteredMessages)
    return (
        <>
            <h1>Messages</h1>
            <div className="messages">

                {
                    messages.map(m => {
                        return <Message key={m.id} message={m} {...props} />
                    })
                }
            </div>
        </>
    )
}