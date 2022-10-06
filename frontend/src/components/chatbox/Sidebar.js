import React from "react";
import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ChatNavbar />
      <ChatSearch />
      <Chats />
    </div>
  );
};

export default Sidebar;
