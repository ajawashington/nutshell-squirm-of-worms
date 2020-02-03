import React, { useContext } from "react"
import "./Messages.css"
import { MessageContext } from "./MessageProvider"
import { FriendContext } from "../friends/FriendProvider";


export default ({ message, history }) => {
    
    const { addFriend } = useContext(FriendContext);
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
                <div className="email__name" onClick={
            (evt) => {
              evt.preventDefault()
              addFriend({
                activeUserId: parseInt(localStorage.getItem("nutshell_user"), 10),
                userId: parseInt(message.userId)
              })
            }} >{message.user.email}: </div>  
                <div className="message__text">{message.text}</div>  
                {activeUserMessage(message, history)}
               
            </section>
    )

}
