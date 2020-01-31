import React, { useContext } from "react"
import "./Friends.css"
import { FriendContext } from "./FriendProvider"
import logo from './worm.jpg' 


export default ({ friend, history }) => {
    
    const {deleteFriend} = useContext(FriendContext)
    
    return(
            <section className="friend">
                <h3 className="friend__name">{friend.user.email}</h3>
                <div className="friend__image">
                  <img src={logo} />
                </div>
                <button onClick={
                    () => {
                        deleteFriend(friend)
                        .then(() => {
                            history.push("/")            
                        })
                    }}>
                Delete Friend
                </button>
            </section>
    )

}
