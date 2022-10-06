import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something...." />
      <div className="send">
        <img src="" alt="" />
        Attach
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src="" alt="" />
          Img
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
