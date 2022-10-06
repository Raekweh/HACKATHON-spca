import React from "react";
import "../styles/Chatbox.scss";
import Sidebar from "../components/chatbox/Sidebar";
import Chat from "../components/chatbox/Chat";

const Chatbox = () => {
  return (
    <div className="chatbox">
      <div className="container-fluid">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Chatbox;
