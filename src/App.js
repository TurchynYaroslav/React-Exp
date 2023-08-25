import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/auth";

function App() {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <MyNavbar filter={filter} setFilter={setFilter} />
        <AppRouter filter={filter} setFilter={setFilter} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
