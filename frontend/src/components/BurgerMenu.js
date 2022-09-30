import MenuIcon from "@mui/icons-material/Menu";
import "../styles/BurgerMenu.css";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function BurgerMenu({ loggedIn, setLogin }) {
  const [menuDisplay, setMenuDisplay] = useState(false);

  function setLoginFalse() {
    setLogin(false);
  }

  // active?

  function handleToggle() {
    setMenuDisplay(!menuDisplay);
  }

  //Only show burger menu if logged in.
  //Add handler to logout button to change log in
  //I set it up to login also routes back home
  if (loggedIn) {
    return (
      <div className="burger-menu-outer-container">
        <div className="burger-container">
          <MenuIcon className="menu-icon" onClick={handleToggle} />
        </div>
        <div
          className={
            menuDisplay ? "menu-container-open" : "menu-container-closed"
          }
        >
          <div>
            <Link to="/">
              <button onClick={handleToggle}>Home</button>
            </Link>
          </div>
          <div>
            <Link to="/search">
              <button onClick={handleToggle}>Search</button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button onClick={handleToggle}>Message</button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button onClick={handleToggle}>Prescription</button>
            </Link>
          </div>
          <div>
            <Link to="/">
              <button
                onClick={(e) => {
                  setLoginFalse();
                  handleToggle();
                }}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
