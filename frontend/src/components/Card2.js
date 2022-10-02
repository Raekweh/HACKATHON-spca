import React from "react";
import { Link } from "react-router-dom";

const Card2 = (data) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={data.data.imageURL} alt="some img" />
      </div>
      <div className="card-title">
        <h1>{data.data.name}</h1>
      </div>

      <div className="card-body">
        <p>{data.data.suburb}</p>
        <p>{data.data.phoneNumber}</p>
        <p>{data.data.openingHours}</p>
        <p>{data.data.url}</p>
      </div>
      <div className="card-btn">
        <Link className="contact" to={"/chatbox"}>
          <button type="button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Card2;
