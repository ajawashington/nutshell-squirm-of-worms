// search bar that then searches through users array 
import React, { useContext, useRef } from "react"
import "./Friends.css"
import { UserContext } from "../users/UserProvider"
import FriendPreview from "./FriendPreview"

export default (props) => {

  const { users } = useContext(UserContext)
    
    const searchText = useRef("")
    

   const searchFriend = () => {
     
      const searchValue = searchText.current.value

      const matchingUser = users.filter(user => {
        return user.email === searchValue
      })

    return (
      <>
      <h1>Friend Preview</h1>
      <div className="friendPreview">
          {
            matchingUser.map(m => {
              console.log("object being sent",m)
              return <FriendPreview key={m.id} newFriend={m} {...props} />
            })
          }
      </div>

      </>
    )
   }
    

    return (
        <form className="searchFriendForm">
            <h2 className="searchFriendForm__title">Search Friend</h2>
            <fieldset>

                <div className="form-group">
                    <input
                        type="text"
                        id="text"
                        name="text"
                        ref={searchText}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Search a Friend"
                        />
                </div>

            </fieldset>
            
                   
            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    searchFriend()
                    }}
                className="btn btn-primary">Search</button>
        </form>
    )
}
