import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./context/App.context";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState({})

  useEffect(() => {
    if(Object.keys(loggedInUser).length) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [loggedInUser])

  const isProtected = element => isLoggedIn ? element : <h3 className="mt-4 text-center">Login to access this route.</h3>

  return (
    <BrowserRouter>
      <AppContext.Provider value={{loggedInUser, setLoggedInUser, isLoggedIn}}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={isProtected(<Products />)} />
        <Route path="/login" element={isLoggedIn ? <Home/> :<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
