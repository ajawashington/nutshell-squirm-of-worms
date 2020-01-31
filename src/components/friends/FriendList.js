import React, { useContext } from "react"
import { FriendContext } from "./FriendProvider"
import Friend from "./Friend"
import "./Friends.css"

export default (props) => {
    const { friends } = useContext(FriendContext)
    const activeUserFriends = friends.filter( friend => {
      return friend.activeUserId === parseInt(localStorage.getItem("nutshell_user"), 10)
    })

    return (
        <>
            <h1>Friends</h1>
            <div className="friends">

                {
                    activeUserFriends.map(e => {
                        return <Friend key={e.id} friend={e} {...props} />
                    })
                }
            </div>
        </>
    )
}