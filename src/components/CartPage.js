import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

import HeaderComponent from "./HeaderComponent";
import UserContext from "../contexts/UserContext";

export default function CartPage() {
  const { userInfo } = useContext(UserContext);

  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    try {
      const response = await axios.get("/cart", userInfo.config);

      //setCart(response.data);
    } catch (err) {
      console.log(err.response);
    }
  }
  

  return (
    <>
      <HeaderComponent />
      <Content></Content>
    </>
  );
}

const Content = styled.div`
  width: 100%;
`;
