import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import EventList from "./events/EventList"
import EventForm from "./events/EventForm"



export default (props) => {
    return (
        <>
            <EventProvider>
                <Route exact path="/" render={
                    props => <EventList {...props} />
                }/>

                <Route exact path="/events" render={
                    props => <EventForm {...props} />
                }/>
                 <Route path="/events/edit/:eventId(\d+)" render={
                            props => <EventForm {...props} />
                        } />
            </EventProvider>

        </>
    )
}