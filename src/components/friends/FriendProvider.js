import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const FriendContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
            .then(res => res.json())
            .then(setFriends)
    }

    const addFriend = newFriend => {
      return fetch("http://localhost:8088/friends", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newFriend)
      })
          .then(getFriends)
  }

    const deleteFriend = friend => {
        return fetch(`http://localhost:8088/friends/${friend.id}`, {
            method: "DELETE",
        })
            .then(getFriends)
    }

   
    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getFriends()
    }, [])

    useEffect(() => {
        console.log("****  Friend APPLICATION STATE CHANGED  ****")
    }, [friends])

    return (
        <FriendContext.Provider value={{
            friends, addFriend, deleteFriend, getFriends
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}