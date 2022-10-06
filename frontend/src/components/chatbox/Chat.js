import React from "react";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src="" alt="" />1
          <img src="" alt="" />2
          <img src="" alt="" />3
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
