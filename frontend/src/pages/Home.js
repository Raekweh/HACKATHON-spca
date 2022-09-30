import React, {} from "react";
import {
  Grid,
  
} from "@mui/material";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid items md={6}>
          <img src={"../images/dog.jpeg"} alt="doggy" className="logoImg"></img>
        </Grid>
        <Grid items md={6}>
          <h1 id="introText" className="introText">
            Your One Stop App For All Things Pet Related
          </h1>
        </Grid>
        <Grid items md={6} className='mobileAbout' order={{xs:4, md:3}}>
          <div className="about-div">
            <h2 className="about-heading">About Us</h2>
            <p id="homeText" className="homeText">
              The PetStop app was designed to help pet owners access non-urgent
              veterinary support online. After signing up, the pet owner is able
              to search for a local veterinary clinic to consult with. The pet
              owner can then send the clinic a detailed message and picture of
              their pet. A veterinary specialist is then able to reply and
              provide the next recommended course of action.
            </p>
          </div>
        </Grid>
        <Grid items md={6} className='mobileAboutImg' order={{xs:3, md:4}}>
          <img
            src={"../images/turtle.jpeg"}
            alt="doggy"
            className="logoImg"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
