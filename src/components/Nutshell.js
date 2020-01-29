import React from "react"
import { Route } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"
// import Login from "./auth/Login"
// import Register from "./auth/Register"
import "./Nutshell.css"

export default () => (
    <>
        <Route>
        <NavBar/> 
        <ApplicationViews/>    
        </Route> 
        
    </>
)