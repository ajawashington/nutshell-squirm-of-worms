import React, { useContext, useRef } from "react"
import { articleContext } from "./articleProvider"
import "./articles.css"

export default props => {
    const { addarticle } = useContext(articleContext)
    const articleName = useRef("")
    const articleLocation = useRef("")
    const articleDate = useRef("")

    const constructNewarticle = () => {
            addarticle({
                name: articleName.current.value,
                location: articleLocation.current.value,
                articleDate: articleDate.current.value,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })
        }
    


    return (
        <form className="articleForm">
            <h2 className="articleForm__title">New article</h2>
            <div className="form-group">
                <label htmlFor="articleName">article name</label>
                <input
                    type="text"
                    id="articleName"
                    ref={articleName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="article name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="articleLocation"
                    ref={articleLocation}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="article Location"
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="articleDate"
                    ref={articleDate}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Article Date"
                />
            </div>
            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewArticle()
                    props.history.push("/")}}
                className="btn btn-primary"> Save Article </button>
        </form>
    )
}