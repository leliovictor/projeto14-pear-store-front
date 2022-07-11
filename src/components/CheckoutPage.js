import styled from "styled-components";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useState, useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function CheckoutPage() {
  const { userInfo } = useContext(UserContext);

  console.log(userInfo);

  const [name, setName] = useState(userInfo.name);
  const [CPF, setCPF] = useState(userInfo.cpf);
  const [email, setEmail] = useState(userInfo.email);
  const [adress, setAdress] = useState("");
  const [creditCard, setCreditCard] = useState("");

  return (
    <>
      <HeaderComponent />
      <Content>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="CPF"
          value={CPF}
          onChange={(e) => setCPF(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Endereço"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="CreditCard"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          required
        />
        <TotalPrice>
        <h1>Total: </h1>
        <h2>{userInfo.buyerPrice}</h2>
      </TotalPrice>
      </Content>
      
      <FooterComponent />
    </>
  );
}

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 80px 10px 80px 10px;

  background-color: #f2f2f2;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;

  border: 1px solid #000000;
  border-radius: 5px;

  padding-left: 5px;

  font-size: 14px;
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
