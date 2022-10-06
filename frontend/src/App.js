

import NavBar from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Search from "./pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState,useContext } from "react";
import Chatbox from "./pages/Chatbox";
import { AuthContext } from './context/AuthContext';
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);
  
  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/"/>
    }
    return children;
  }
  
  
 
  return (
    <div>
      <NavBar loggedIn={isLoggedIn} setLogin={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home loggedIn={isLoggedIn} />} />
        <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
        <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
        <Route path="/chatbox" element={<ProtectedRoute><Chatbox /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
