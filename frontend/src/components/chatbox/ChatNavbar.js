import React,{useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

const ChatNavbar = () => {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);


  return (
    <div className="navbar">
      <div className="span">Chat</div>
      <div className="user">
        <img src="" alt="" />
        <span>{currentUser.displayName}</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default ChatNavbar;
