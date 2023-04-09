import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const {user} =useContext(AuthContext)
  const LoginNavigation= () =>{  
return user? <Navigate replace to='/'/>: <Login />
  }
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={!user? <Navigate to='/login'/> : <Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={LoginNavigation()} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
