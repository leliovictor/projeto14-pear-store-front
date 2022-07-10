import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import HeaderComponent from "./HeaderComponent";
import UserContext from "../contexts/UserContext";
import CartItem from "./CartItem";

export default function CartPage() {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  const [cart, setCart] = useState([
    {
      name: "Memoria ultra mega super ddr5 comasdasdasdasdasdsadasdasdasdsadasdsad wifi bluetoth, pisca em 15 cores diferente e ainda faz um omelete se estiver com fome",
      price: "R$ 299,58",
      image:
        "https://w7.pngwing.com/pngs/655/476/png-transparent-ddr3-sdram-memory-module-dimm-computer-data-storage-registered-memory-ram-ram-ram-electronic-device-ddr.png",
    },
    {
      name: "memoria",
      price: "R$ 299,58",
      image:
        "https://s2.glbimg.com/K_qkDk_em2NfvIJJpcrUZcUEFvI=/0x0:695x465/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/S/cAJvoDRFuzchoytX5ZUw/2016-07-19-memoria-ram-1.jpg",
    },
  ]);

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    try {
      const response = await axios.get("/cart", userInfo.config);

      //setCart(response.data); -> acertar rota primeiro (onde tá o cart?)
    } catch (err) {
      console.log(err.response);
    }
  }

  function checkCart() {
    if (cart.length === 0) return renderEmptyCart();

    return renderCart();
  }

  function renderEmptyCart() {
    return (
      <EmptySpace>
        <h1>Seu carrinho está vazio!</h1>
        <button onClick={() => navigate("/produtos")}>Ver Ofertas!</button>
      </EmptySpace>
    );
  }

  function renderCart() {
    const render = cart.map((obj, index) => (
      <CartItem
        key={index}
        index={index}
        name={obj.name}
        price={obj.price}
        image={obj.image}
      />
    ));
    return render;
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
  min-height: 100vh; //Considerando footer e top fixado

  padding: 80px 10px 80px 10px;
  background-color: #f2f2f2;
`;

const EmptySpace = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 110px;

  h1 {
    font-size: 20px;
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
    color: #ffffff;

    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
  }
`;

const Title = styled.div`
  display: flex;
  padding-top: 10px;

  margin-bottom: 10px;

  font-size: 35px;

  h1 {
    font-size: 20px;
    line-height: 23px;

    padding-left: 10px;
    display: flex;
    align-items: center;
  }
`;
