import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Container,
  Grid,
} from "@mui/material";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Search from "./pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import Chatbox from "./pages/Chatbox";

import "./App.css"; 

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  
  return (
    <div>
      
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}   />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chatbox" element={<Chatbox />} />
      </Routes>
    </div>
  );
}

export default App;
