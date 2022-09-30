import {
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Login from "./Login";

const NavBar = ({isLoggedIn,setIsLoggedIn}) => {
  console.log(isLoggedIn);
  return (
    <div>
      <AppBar position="relative">
        <Toolbar className="navBar">
          <Typography variant="h4">
            <Link to="/" className="title">
              PetStop
            </Link>
          </Typography>
          {isLoggedIn ? <ul className="links">
            <li><Link className='routes' to={'/search'}>Find Clinic</Link></li>
            <li><Link className='routes' to={'/chatbox'}>Messages</Link></li>
          </ul>
          :
          ''
}
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    
          <img
            src={"../images/navbarImg.jpeg"}
            alt="rabbit"
            className="titleImg"
          ></img>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
