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
import { MessageProvider } from "./messages/MessageProvider"
import MessageList from "./messages/MessageList"
import MessageForm from "./messages/MessageForm"
// import ProviderProvider from "./ProviderProvider"



export default (props) => {
    return (
        <>
        {/* <ProviderProvider>
            <Route exact path="/"></Route>
        </ProviderProvider> */}
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

            <TaskProvider>
            <MessageProvider>
                    <EventProvider>
                        <ArticleProvider>
                <Route  exact path="/" render={
                    props => <MessageList {...props}/>
                }/>
                <Route exact path="/" render={
                    props => <MessageForm {...props}/>
                }/>
                    <Route path="/:messageId(\d+)" render={
                        props => <TaskList {...props} />
                    } />
                    <Route path="/:messageId(\d+)" render={
                        props => <EventList {...props} />
                    } />
                    <Route path="/:messageId(\d+)" render={
                        props => <ArticleList {...props} />
                    } />
                    <Route path="/:messageId(\d+)" render={
                        props => <MessageList {...props} />
                    } />
                <Route path="/:messageId(\d+)" render={
                    props => <MessageForm {...props} />
                } />
                        </ArticleProvider>
                    </EventProvider>
            </MessageProvider>
            </TaskProvider>

        </>
    )
}