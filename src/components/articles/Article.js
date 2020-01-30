import React, { useContext } from "react"
import "./Articles.css"
import { ArticleContext } from "./ArticleProvider"




export default ({ article, history }) => {
    
    const {deleteArticle} = useContext(ArticleContext)
    
    const activeUserArticle = (article, history) => {
        
    if(article.userId === parseInt(localStorage.getItem("nutshell_user"), 10)){
    return(
    
    <div> 
        <button>Edit Article</button>
    
        <button onClick={
            () => {
                deleteArticle(article)
                .then(() => {
                    history.push("/")            
                })
            }}>
        Delete Article
        </button>
    
    </div>
    
    )} else {
        return("")
    }}


    return(
            <section className="article">
                <h3 className="article__title">{article.title}</h3>
                <div className="article__url">{ article.url }</div>
                <div className="article__synopsis">{ article.synopsis }</div>
                {activeUserArticle(article, history)}

            </section>
    )

}