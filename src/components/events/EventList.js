import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import Event from "./Event"
import "./Events.css"

export default (props) => {
    const { events } = useContext(EventContext)

    return (
        <>
            <h1>Events</h1>
            <div className="events">

                {
                    events.map(e => {
                        return <Event key={e.id} event={e} {...props} />
                    })
                }
            </div>
        </>
    )
}