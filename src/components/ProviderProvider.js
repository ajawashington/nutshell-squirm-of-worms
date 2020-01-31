import React from "react"
import { TaskProvider } from "./tasks/TaskProvider"
import { ArticleProvider } from "./articles/ArticleProvider"
import { MessageProvider } from "./messages/MessageProvider"
import { EventProvider } from "./events/EventProvider"

export default (props) => {
  return (
    <>
     <TaskProvider>
       <ArticleProvider>
         <MessageProvider>
           <EventProvider>
            {props.children}
           </EventProvider>
         </MessageProvider>
       </ArticleProvider>
      </TaskProvider> 
    
    </>
  )
}