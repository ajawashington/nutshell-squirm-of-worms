import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./EventProvider"
import "./Events.css"

export default props => {
    const { addEvent, updateEvent, events } = useContext(EventContext)
    const [event, setEvent] = useState({})

    const editMode = props.match.params.hasOwnProperty("eventId")

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newEvent = Object.assign({}, event)
        newEvent[evt.target.name] = evt.target.value
        console.log(newEvent)
        setEvent(newEvent)
    }

    const setDefaults = () => {
        if (editMode) {
            const eventId = parseInt(props.match.params.eventId)
            const selectedEvent = events.find(e => e.id === eventId) || {}
            setEvent(selectedEvent)
            console.log(selectedEvent)
        
        }
    }

    useEffect(() => {
        setDefaults()
    }, [events])

    const constructNewEvent = () => {
        if (editMode) {
            updateEvent({
                id: event.id,
                name: event.name,
                location: event.location,
                eventDate: event.eventDate,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })
                .then(() => props.history.push("/"))
        } else {
            addEvent({
                name: event.name,
                location: event.location,
                eventDate: event.eventDate,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })
            .then(() => props.history.push("/"))
        }
        }
    


    return (
        <form className="EventForm">
            <h2 className="EventForm__title">{editMode ? "Edit Event" : "New Event"}</h2>
            <fieldset>

            <div className="form-group">
                <label htmlFor="eventName">Event name</label>
                <input
                    type="text"
                    id="eventName"
                    name="name"
                    defaultValue={event.name}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Event name"
                    proptype="varchar"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
                    <fieldset>
                        
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="eventLocation"
                    name="location"
                    defaultValue={event.location}
                    required
                    className="form-control"
                    proptype="varchar"
                    placeholder="Event Location"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
                    <fieldset>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    defaultValue={event.eventDate}
                    required
                    className="form-control"
                    placeholder="Event Date"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewEvent()
                    }}
                className="btn btn-primary"> {editMode ? "Update Event": "Make Event"} </button>
        </form>
    )
}