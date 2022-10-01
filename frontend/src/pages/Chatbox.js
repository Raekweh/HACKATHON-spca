import React from "react";
import { ChatEngine } from "react-chat-engine";
import "../styles/Chatbox.css";

const Chatbox = () => {
  console.log('sddsd');
  return (
    <ChatEngine
      height="90vh"
      projectID={"da17cdd0-440d-4810-a95c-d223d7fabbdc"}
      userName={"admin"}
      userSecret={"123"}
    />
  );
};

export default Chatbox;
