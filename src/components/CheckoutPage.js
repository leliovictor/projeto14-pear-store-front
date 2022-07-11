import styled from "styled-components";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";

import UserContext from "../contexts/UserContext";
import ModalComponent from "./ModalComponent";

export default function CheckoutPage() {
  const { userInfo } = useContext(UserContext);
  const location = useLocation();

  const { cart, howManyItems } = location.state;

  const [name, setName] = useState(userInfo.name);
  const [CPF, setCPF] = useState(userInfo.cpf);
  const [email, setEmail] = useState(userInfo.email);
  const [adress, setAdress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [modal, setModal] = useState(false);

  function calcTotal(price, amount) {
    const value = price.replace("R$", "").replace(",", ".").trim();
    const total = parseFloat(value) * amount;

    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  }

  function confirmPayment(e) {
    e.preventDefault();

    setModal(true);
  }

  return (
    <>
      <HeaderComponent />
      <Content>
        {cart.map((obj, index) => (
          <ProductsItem key={index}>
            <div>
              <img src={obj.image} alt={obj.name} />
              <h1>{obj.name}</h1>
            </div>
            <div>
              <h2>Quantidade: {howManyItems[index]}</h2>
              <h3>Total: {calcTotal(obj.price, howManyItems[index])}</h3>
            </div>
          </ProductsItem>
        ))}
        <TotalPrice>
          <h1>Total: </h1>
          <h2>{userInfo.buyerPrice}</h2>
        </TotalPrice>
        <Payment>
          <p>Dados para pagamento</p>
          <form onSubmit={confirmPayment}>
            <Input
              type="text"
              placeholder="Nome"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="CPF"
              defaultValue={CPF}
              onChange={(e) => setCPF(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="E-mail"
              defaultValue={email}
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

            <button type="submit">Realizar pagamento</button>
          </form>
        </Payment>
      </Content>
      <FooterComponent />
      <ModalComponent
        modal={modal}
        setModal={setModal}
        name={name}
        cpf={CPF}
        email={email}
        adress={adress}
        creditCard={creditCard}
        totalPrice={userInfo.buyerPrice}
      />
    </>
  );
}

const Content = styled.div`
  width: 100vw;
  min-height: 100vh;
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

  font-size: 16px;
  line-height: 23px;
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

const ProductsItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #d4d4d4;
  border-radius: 10px;

  img {
    width: 120px;
    height: 120px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  h1 {
    width: 100%;
    font-size: 20px;
    max-height: 130px;
    overflow: scroll;
    word-break: break-all;
    text-align: center;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  h2 {
    font-size: 15px;
  }

  h3 {
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Payment = styled.div`
  button {
    margin-top: 10px;
    width: 100%;
    height: 30px;

    background: #347746;
    border-radius: 5px;
    border: none;

    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 20px;
    line-height: 23px;

    padding: 15px 0;
    display: flex;
    align-items: center;
  }
`;
