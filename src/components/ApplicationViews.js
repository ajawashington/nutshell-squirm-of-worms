import React from "react"
import { Route } from "react-router-dom"
import { EventProvider } from "./events/EventProvider"
import EventList from "./events/EventList"
import EventForm from "./events/EventForm"
import { ArticleProvider } from "./articles/ArticleProvider"
import ArticleList from "./articles/ArticleList"
import ArticleForm from "./articles/ArticleForm"
import { TaskProvider } from "./tasks/TaskProvider";
import TaskList from "./tasks/TaskList";
import TaskForm from "./tasks/TaskForm";



export default (props) => {
    return (
        <>
            <TaskProvider>
                    <Route exact path="/" render={
                                props => <TaskList {...props}/>
                            }/>

                    <Route exact path="/tasks" render={
                                        props => <TaskForm {...props} />
                                    }/>
            </TaskProvider>
            
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

            <ArticleProvider>
                    <Route exact path="/" render={
                        props => <ArticleList {...props}/>
                    }/>
                     <Route exact path="/articles" render={
                    props => <ArticleForm {...props} />
                }/>
                 <Route path="/articles/edit/:articleId(\d+)" render={
                            props => <ArticleForm {...props} />
                        } />

            </ArticleProvider>


        </>
    )
}