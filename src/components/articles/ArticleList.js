import React, { useContext } from "react"
import { ArticleContext } from "./ArticleProvider"
import Article from "./Article"
import "./Articles.css"
import { FriendContext } from "../friends/FriendProvider"

export default (props) => {
    const { articles } = useContext(ArticleContext)
    const { friends } = useContext(FriendContext)


    const articlesArray = []

    const activeUserArticles = articles.filter(a => {
        return a.userId === parseInt(localStorage.getItem("nutshell_user"), 10)
    })

    activeUserArticles.map(a => {
        return articlesArray.push(a)
    })

    const activeFriendsArray = friends.filter( f => {
        return f.activeUserId === parseInt(localStorage.getItem("nutshell_user"), 10)
    })

    const friendsArticles = activeFriendsArray.map(f =>{
        return articles.filter(a => {
            return a.userId === f.userId 
        })
    })


    const singleFriendArticle = friendsArticles.map (f => {
        return f.map(sf => articlesArray.push(sf))
    })

    console.log(articlesArray)
    return (
        <>
            <h1>Articles</h1>
            <div className="articles">

                {
                    articlesArray.map(a => {
                        return <Article key={a.id} article={a} {...props} />
                    })
                }
            </div>
        </>
    )
}