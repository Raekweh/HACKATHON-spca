import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Register from "./Register";

const NavBar = ({ loggedIn, setLogin }) => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar className="navBar">
          <Typography className="navBar-title-container" variant="h4">
            <Link to="/" className="title">
              PetStop
            </Link>
          </Typography>
          <Login isLoggedIn={loggedIn} setLogin={setLogin} />
          {/* <Button id="login-button" variant="primary" >
        Sign In
      </Button> */}

          {/* <Button
            variant="contained"
            className="btn"
            sx={{
              backgroundColor: "#47bfaf",
              fontFamily: "gotham",
            }}
          >
            Log In
          </Button> */}
          <img
            src={"../images/navbarImg.jpeg"}
            alt="rabbit"
            className="titleImg"
          ></img>
          <ul className="links">
            {/* <li><Link to='/services'>Link1</Link></li>
        <li>link2</li>
        <li>link3</li> */}
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
