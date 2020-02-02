 import React, { useContext } from "react"
import "./Events.css"
import { EventContext } from "./EventProvider"



export default ({ event, history }) => {
    
    const {deleteEvent} = useContext(EventContext)



    
    const activeUserEvent = (event, history) => {
        
    if(event.userId === parseInt(localStorage.getItem("nutshell_user"), 10)){
    return(
    
    <div> 
      <button onClick={() => {
               history.push(`/events/edit/${event.id}`)
            }}>Edit</button>
    
        <button onClick={
            () => {
                deleteEvent(event)
                .then(() => {
                    history.push("/")            
                })
            }}>
        Delete Event
        </button>
    
    </div>
    
    )} else {
        return("")
    }}


    return(
            <section className="event">
                <h3 className="event__name">{event.name}</h3>
                <div className="event__date">{ event.eventDate }</div>
                <div className="event__location">{ event.location }</div>
                {activeUserEvent(event, history)}

            </section>
    )

}
