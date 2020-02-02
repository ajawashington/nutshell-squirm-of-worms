import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import Event from "./Event"
import "./Events.css"
import { FriendContext } from "../friends/FriendProvider"

export default (props) => {
    const { events } = useContext(EventContext)
    const { friends } = useContext(FriendContext)

    const eventsArray = []

    const activeUserEvents = events.filter(e => {
        return e.userId === parseInt(localStorage.getItem("nutshell_user"),10)
    })
    activeUserEvents.map(a => {
        return eventsArray.push(a)
    })

    const activeUserFriendsArray = friends.filter( f => {
        return f.activeUserId === parseInt(localStorage.getItem("nutshell_user"), 10)
    })
    
   
    const friendEvents = activeUserFriendsArray.map( f => {
        return events.filter(e => e.userId === f.userId)
    })
    
    const singeleFriendEvent = friendEvents.map(f => {
        return f.map(sf => {return eventsArray.push(sf)}
    )} )
   

    console.log("active user + friends'event array", eventsArray)

    return (
        <>
            <h1>Events</h1>
            <div className="events">

                {
                    eventsArray.map(e => {
                        return <Event key={e.id} event={e} {...props} />
                    })
                }
           
            </div>
        </>
    )
}