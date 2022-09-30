import MenuIcon from "@mui/icons-material/Menu";
import "../styles/BurgerMenu.css";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function BurgerMenu() {
  const [menuDisplay, setMenuDisplay] = useState(false);

  function handleToggle() {
    setMenuDisplay(!menuDisplay);
  }

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
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to="/search">
            <button>Search</button>
          </Link>
        </div>
        <div>
          <Link>
            <button>Message</button>
          </Link>
        </div>
        <div>
          <Link>
            <button>Prescription</button>
          </Link>
        </div>
        <div>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}
