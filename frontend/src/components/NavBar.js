import { Typography, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Login from "./Login";

import BurgerMenu from "./BurgerMenu";

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
          <BurgerMenu loggedIn={loggedIn} setLogin={setLogin} />
          <img
            src={"../images/navbarImg.jpeg"}
            alt="rabbit"
            className="titleImg"
          ></img>
          <ul className="links"></ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
