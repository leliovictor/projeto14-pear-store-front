import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ModalItem from "./ModalItem";

export default function ModalComponent({
  modal,
  setModal,
  name,
  cpf,
  email,
  adress,
  creditCard,
  totalPrice,
}) {
  const navigate = useNavigate();

  function confirm() {
    alert("Pagamento realizado");
    navigate("/produtos");
  }

  return (
    <Background modal={modal} onClick={() => setModal(false)}>
      <Content>
        <p>Confirme seus dados</p>
        <ModalItem tag="Nome" value={name} />
        <ModalItem tag="CPF" value={cpf} />
        <ModalItem tag="Email" value={email} />
        <ModalItem tag="Endereço" value={adress} />
        <ModalItem tag="CreditCard" value={creditCard} />
        <TotalDiv>
          <h1>Valor total: </h1>
          <h2>{totalPrice}</h2>
        </TotalDiv>
        <ButtonsDiv>
          <button onClick={() => confirm()}>Confirmar</button>
          <button onClick={() => navigate("/cart")}>Carrinho</button>
        </ButtonsDiv>
      </Content>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.modal ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  background-color: rgba(192, 192, 192, 0.3);
`;
const Content = styled.div`
  background-color: #47c760;
  width: 80vw;
  height: fit-content;
  padding: 10px;
  border-radius: 5px;

  p {
    font-weight: 700px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;

    margin-bottom: 15px;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 0;

  button {
    height: 30px;
    color: #ffffff;
    width: 120px;
    border-radius: 5px;
    border: none;
    background: #347746;
    font-size: 15px;
  }
`;

const TotalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  color: #ffffff;
  font-size: 18px;
`;
