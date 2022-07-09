import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import HeaderComponent from "./HeaderComponent";
import UserContext from "../contexts/UserContext";
import CartItem from "./CartItem";

export default function CartPage() {
  const navigate = useNavigate();
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

  function checkCart() {
    if(cart.lenght === 0) return renderEmptyCart();

    return renderCart();
}

  function renderEmptyCart() {
    return(
        <EmptySpace>
            <h1>Seu carrinho está vazio!</h1>
            <button onClick={()=> navigate("/produtos")}>Ver Ofertas!</button>
        </EmptySpace>
    );
}
  
  function renderCart() {
    return cart.map((index, obj => {
        <CartItem key={index} index={index} name={obj.name} price={obj.price} image={image}/>
    }));
}

  return (
    <>
      <HeaderComponent />
      <Content>
            <Title>
                <ion-icon name="cart-outline"></ion-icon>
                <h1>MEU CARRINHO</h1>
            </Title>
            {checkCart()}
        </Content>
    </>
  );
}

const Content = styled.div`
    width: 100vw;
    height: 100vh; //Considerando footer e top fixado
`;

const EmptySpace = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 110px;

    h1 {
        font-size:20px;
        line-height: 23px;
        color: #000000;
        text-align: center;
        width: 100%;
        margin-bottom: 16px;
    }

    button {
        width: 186px;
        height: 58px;
        background-color: #347746;
        color: #FFFFFF;

        border: none;
    }

`;