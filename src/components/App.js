import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import {useState} from "react";

import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ProductsPage from "./ProductsPage"

export default function App() {

    const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/produtos" element={<ProductsPage />}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}