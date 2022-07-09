import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../contexts/UserContext";
import Logo from "../assets/logo.png";

export default function HeaderComponent() {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Content>
      <img src={Logo} alt="Logo" />
      <h1>Olá, {userInfo.name}</h1>
      <ion-icon name="exit-outline" onClick={() => navigate("/")}></ion-icon>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px;

  color: #ffffff;
  font-size: 32px;

  img {
    width: 53px;
    height: 60px;
  }

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
  }
`;
