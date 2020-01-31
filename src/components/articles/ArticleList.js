import React, { useContext } from "react"
import { ArticleContext } from "./ArticleProvider"
import Article from "./Article"
import "./Articles.css"

export default (props) => {
    const { articles } = useContext(ArticleContext)

    return (
        <>
            <h1>Articles</h1>
            <div className="articles">

                {
                    articles.map(a => {
                        return <Article key={a.id} article={a} {...props} />
                    })
                }
            </div>
        </>
    )
}