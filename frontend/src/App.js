

import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Search from "./pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import "./App.css";
import Chatbox from "./pages/Chatbox";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  return (
    <div>
      <NavBar loggedIn={isLoggedIn} setLogin={setIsLoggedIn} />

      {/* <BurgerMenu loggedIn={isLoggedIn} setLogin={setIsLoggedIn} /> */}

      <Routes>
        <Route path="/" element={<Home loggedIn={isLoggedIn} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chatbox" element={<Chatbox />} />
      </Routes>
    </div>
  );
}

export default App;
