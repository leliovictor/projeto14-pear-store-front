import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

export default function FooterComponent({ cart, howManyItems }) {
  const navigate = useNavigate();
  const location = useLocation();

  function buttonConstruction() {
    if (location.pathname === "/cart" && cart.length === 0)
      return renderProductButton();
    if (location.pathname === "/produtos") return renderCartButton();
    if (location.pathname === "/cart") return renderProductCheckoutButton();
    if (location.pathname === "/checkout") return renderProductCartButton();
  }

  function renderProductButton() {
    return <button onClick={() => navigate("/produtos")}>Produtos</button>;
  }

  function renderCartButton() {
    return <button onClick={() => navigate("/cart")}>Carrinho</button>;
  }

  function renderProductCheckoutButton() {
    return (
      <>
        <SmallButton onClick={() => navigate("/produtos")}>
          Produtos
        </SmallButton>
        <SmallButton onClick={() => goToCheckout()}>
          Confirmar compra
        </SmallButton>
      </>
    );
  }

  function goToCheckout() {
    navigate("/checkout", {state: {cart, howManyItems}});
  };

  function renderProductCartButton() {
    return (
      <>
        <SmallButton onClick={() => navigate("/produtos")}>
          Produtos
        </SmallButton>
        <SmallButton onClick={() => navigate("/cart")}>Carrinho</SmallButton>
      </>
    );
  }

  return (
    <>
      <Content>{buttonConstruction()}</Content>
    </>
  );
}

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 60px;
  background-color: #47c760;
  padding: 0 15px 0 15px;

  button {
    border: none;
    width: 100%;
    height: 30px;
    background-color: #347746;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
    border-radius: 5px;
  }
`;

const SmallButton = styled.button`
  width: 49% !important;
`;
