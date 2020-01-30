import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Nutshell Dashboard</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/friends">Add Friends</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/messages">Messages</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/news">News</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/tasks">Tasks</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/events">Events</Link>
            </li>


{
    localStorage.getItem("nutshell_user")
        ? <li className="navbar__item">
            <Link className="navbar__link"
                to=""
                onClick={e => {
                    e.preventDefault()
                    localStorage.removeItem("nutshell_user")
                    props.history.push("/")
                }}
            >Logout</Link>
        </li>
        : ""
}
        </ul>
    )
}