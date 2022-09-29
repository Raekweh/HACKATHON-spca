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

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
