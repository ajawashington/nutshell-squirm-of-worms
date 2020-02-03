// search bar that then searches through users array
import React, { useContext, useRef, useState } from "react";
import "./Friends.css";
import { UserContext } from "../users/UserProvider";
import FriendPreview from "./FriendPreview";

export default props => {
  const { users } = useContext(UserContext);
  const [futureFriends, setNewFriend] = useState([])
  const [searchTerm, setSearchTerm] = useState({})
  // first one holds the state, setNewFriend is a function
 
  
  const handleControlledInputChange = (event) => {
    const search = Object.assign({}, searchTerm)
    search[event.target.name]=event.target.value 
    setSearchTerm(search) 
    
  }
  
  const searchFriend = () => {
 
    const matchingUser=users.filter(user => {
      return user.email.includes(searchTerm.email)   
    })

   
    setNewFriend(matchingUser)
   
  
  };


  return (
    <>
      <form className="searchFriendForm">
        <h2 className="searchFriendForm__title">Search Friend</h2>
        <fieldset>
          <div className="form-group">
            <input
              type="text"
              id="text"
              name="email"
              
              required
              autoFocus
              className="form-control"
              placeholder="Search a Friend"
              defaultValue={""}
              onChange={handleControlledInputChange}
            />
          </div>
        </fieldset>
      </form>
      <button
        type="submit"
        onClick={evt => {
          evt.preventDefault();
          searchFriend()
        }}
        className="btn btn-primary"
      >
        Search
    
      </button>
      {
       futureFriends.map(m => {
        return <FriendPreview key={m.id} newFriend={m} {...props} />;
      })} 
     
    </>
  );
};
