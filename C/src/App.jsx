import { BrowserRouter, Routes, Route } from "react-router";
import Loginpage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import IndexPage from "./pages/Index";

function App() {
  useEffect(() => {
    // Initialise the data store if it isnt
    const isInitialised = (localStorage.getItem("users") !== null);
    if (!isInitialised) {
      // setup a user so that login can be tested
      const initUsers = [{
        "email": "test@example.com",
        "password": "Password1!"
      },]
      localStorage.setItem("users", JSON.stringify(initUsers))
    }
  });
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
