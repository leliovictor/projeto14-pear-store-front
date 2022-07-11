import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import HeaderComponent from "./HeaderComponent";
import UserContext from "../contexts/UserContext";
import CartItem from "./CartItem";
import FooterComponent from "./FooterComponent";

export default function CartPage() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [cart, setCart] = useState([
    {
      name: "Memoria",
      price: "R$ 323,50",
      image:
        "https://idocode.com.br/wp-content/uploads/2018/07/partes-pc.jpg.webp",
    },
    {
      name: "Memoria",
      price: "R$ 323,50",
      image:
        "https://idocode.com.br/wp-content/uploads/2018/07/partes-pc.jpg.webp",
    },
    {
      name: "Memoria",
      price: "R$ 323,50",
      image:
        "https://idocode.com.br/wp-content/uploads/2018/07/partes-pc.jpg.webp",
    },
  ]);

  const [howManyItems, setHowManyItems] = useState(
    new Array(cart.length).fill(1)
  );
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getCart();
  }, [refresh]);

  async function getCart() {
    try {
      const response = await axios.get(
        "https://projeto14-pear-store.herokuapp.com/cart",
        userInfo.config
      );

      //setCart(response.data);
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
    return (
      <>
        {cart.map((obj, index) => (
          <CartItem
            key={index}
            index={index}
            name={obj.name}
            price={obj.price}
            image={obj.image}
            howManyItems={howManyItems}
            setHowManyItems={setHowManyItems}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ))}
        <TotalPrice>
          <h1>Total: </h1>
          <h2>{calcTotalprice()}</h2>
        </TotalPrice>
      </>
    );
  }

  function calcTotalprice() {
    let sum = 0;
    cart.map((obj, index) => {
      let value = obj.price;
      value = value.replace("R$", "").replace(",", ".").trim();
      return (sum += parseFloat(value) * howManyItems[index]);
    });

    return `R$ ${sum.toFixed(2).replace(".", ",")}`;
  }

  useEffect(() => {
    if (cart.length > 0)
      setUserInfo({ ...userInfo, buyerPrice: calcTotalprice() });
  }, [howManyItems]);
  console.log(userInfo);

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
      <FooterComponent cart={cart} />
    </>
  );
}

const Content = styled.div`
  width: 100vw;
  min-height: 100vh; //Considerando footer e top fixado

  padding: 80px 10px 70px 10px;
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

const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  h1 {
    padding-right: 5px;
  }
`;
