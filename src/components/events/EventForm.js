import React, { useContext, useRef } from "react"
import { EventContext } from "./EventProvider"
import "./Events.css"

export default props => {
    const { addEvent } = useContext(EventContext)
    const eventName = useRef("")
    const eventLocation = useRef("")
    const eventDate = useRef("")

    const constructNewEvent = () => {
            addEvent({
                name: eventName.current.value,
                location: eventLocation.current.value,
                eventDate: eventDate.current.value,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })
        }
    


    return (
        <form className="EventForm">
            <h2 className="EventForm__title">New Event</h2>
            <div className="form-group">
                <label htmlFor="eventName">Event name</label>
                <input
                    type="text"
                    id="eventName"
                    ref={eventName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Event name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="eventLocation"
                    ref={eventLocation}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Event Location"
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="eventDate"
                    ref={eventDate}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Event Date"
                />
            </div>
            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewEvent()
                    props.history.push("/")}}
                className="btn btn-primary"> Save Event </button>
        </form>
    )
}