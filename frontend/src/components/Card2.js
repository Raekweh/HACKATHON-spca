import React from "react";
import { Grid, Container } from "@mui/material";

const Card2 = (data) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={data.data.img} alt="some img" />
      </div>
      <div className="card-title">
        <h1>{data.data.name}</h1>
      </div>

      <div className="card-body">
        <p>
          {data.data.suburb}, {data.data.location}
        </p>
        <p>{data.data.hours}</p>
        <p>{data.data.website}</p>
      </div>
      <div className="card-btn">
        <button type="button">Contact Us</button>
      </div>
    </div>
    // <div className="card">
    //   {/* <img src={data.data.img} alt="" className="cardImg"/></img> */}

    //   <div className="card-image"></div>
    //   <h2>{data.data.name}</h2>
    //   <p>{data.data.location}</p>
    //   <p>{data.data.suburb}</p>
    //   <p>{data.data.hours}</p>
    //   <p>{data.data.website}</p>
    // </div>
  );
};

export default Card2;
