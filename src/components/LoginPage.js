import styled from "styled-components";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../contexts/UserContext";
import Logo from "../assets/logo.png";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    setLoading(true);
    e.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("https://projeto14-pear-store.herokuapp.com/login", body);

      registerLogin(response.data);
    } catch (err) {
      alert(err.response.data);
      setLoading(false);
    }

    function registerLogin(obj) {
        setUserInfo({
        name: obj.name,
        email: obj.email,
        config: {
          headers: {
            authorization: `Bearer ${obj.token}`,
          },
        },
      });

      navigate("/produtos");
    }
  }

  return (
    <Content>
      <img src={Logo} alt="Logo" />
      <h1>Pear Store</h1>
      <form onSubmit={login}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading ? "disabled" : ""}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="on"
          disabled={loading ? "disabled" : ""}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to={"/register"}>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  img {
      width: 100px;
  }

  h1 {
    
    font-size: 32px;
    line-height: 50px;

    color: #ffffff;
    margin-bottom: 24px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0px 24px 30px 24px;
  }

  button {
    width: 100%;
    height: 46px;

    background: #347746;
    border-radius: 5px;
    border: none;

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #ffffff;
  }

  p {
    width: 100%;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 58px;
  background: #ffffff;
  border-radius: 5px;

  margin-bottom: 13px;
  border: none;

  font-size: 20px;
  line-height: 23px;

  padding-left: 15px;

  ::placeholder {
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: #000000;
  }
`;