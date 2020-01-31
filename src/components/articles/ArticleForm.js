import React, { useContext, useState, useEffect } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Articles.css"

export default props => {
    const { addArticle, updateArticle, articles } = useContext(ArticleContext)
    const [article, setArticle] = useState({})

    const editMode = props.match.params.hasOwnProperty("articleId")

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newArticle = Object.assign({}, article)
        newArticle[evt.target.name] = evt.target.value
        console.log(newArticle)
        setArticle(newArticle)
    }

    const setDefaults = () => {
        if (editMode) {
            const articleId = parseInt(props.match.params.articleId)
            const selectedArticle = articles.find(a => a.id === articleId) || {}
            setArticle(selectedArticle)
            console.log(selectedArticle)
        
        }
    }

    useEffect(() => {
        setDefaults()
    }, [articles])

    const constructNewArticle = () => {
        if (editMode) {
            updateArticle({
                id: article.id,
                title: article.title,
                url: article.url,
                synopsis: article.synopsis,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })
                .then(() => props.history.push("/"))
        } else {
            addArticle({
                title: article.title,
                url: article.url,
                synopsis: article.synopsis,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })
            .then(() => props.history.push("/"))
        }
        }
    


    return (
        <form className="ArticleForm">
            <h2 className="ArticleForm__title">{editMode ? "Edit Article" : "New Article"}</h2>
            <fieldset>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={article.title}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Article Title"
                    proptype="varchar"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
                    <fieldset>
                        
            <div className="form-group">
                <label htmlFor="url">URL</label>
                <input
                    type="text"
                    id="url"
                    name="url"
                    defaultValue={article.url}
                    required
                    className="form-control"
                    proptype="varchar"
                    placeholder="url"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
                    <fieldset>

            <div className="form-group">
                <label htmlFor="synopsis">Synopsis</label>
                <input
                    type="text"
                    id="synopsis"
                    name="synopsis"
                    defaultValue={article.synopsis}
                    required
                    className="form-control"
                    placeholder="Article Synopsis"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewArticle()
                    }}
                className="btn btn-primary"> {editMode ? "Update Article": "Make Article"} </button>
        </form>
    )
}