import React, { useContext } from "react"
import "./Messages.css"
import { MessageContext } from "./MessageProvider"





export default ({ message, history }) => {
    
    const {deleteMessage} = useContext(MessageContext)
    
    const activeUserMessage = (message, history) => {
        
    if(message.userId === parseInt(localStorage.getItem("nutshell_user"), 10)){
    return(
    
    <div> 
      <button onClick={() => {
               history.push(`/${message.id}`)
            }}>Edit</button>
    
        <button onClick={
            () => {
                deleteMessage(message)
                .then(() => {
                    history.push("/")            
                })
            }}>
        Delete Message
        </button>
    
    </div>
    
    )} else {
        return("")
    }}


    return(
            <section className="message">
                <div className="email__name">{message.user.email}: </div>  
                <div className="message__text">{message.text}</div>  
                {activeUserMessage(message, history)}
               
            </section>
    )

}
