import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";

import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export default function RegisterPage() {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  async function postRegister(e) {
    e.preventDefault();
    try {
      const cpfValido = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
      let resultCPF = cpfValido.test(userSignUp.cpf);
      if (resultCPF) {
        if (userSignUp.password === userSignUp.confirmPassword && resultCPF) {
          const data = {
            name: userSignUp.name,
            email: userSignUp.email,
            cpf: userSignUp.cpf,
            password: userSignUp.password,
            confirmPassword: userSignUp.confirmPassword,
          };
          console.log(data);

          await axios.post(
            "https://projeto14-pear-store.herokuapp.com/register",
            data
          );
          navigate("/");
        } else {
          alert("As senhas não são iguais! Tente novamente.");
          setUserSignUp({
            name: "",
            email: "",
            cpf: "",
            password: "",
            confirmPassword: "",
          });
        }
      } else {
        alert("Cpf invalido, o cpf deve ser no formato xxx.xxx.xxx-xx");
        setUserSignUp({
          name: "",
          email: "",
          cpf: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (e) {
      alert(e.response.data);
      setUserSignUp({
        name: "",
        email: "",
        cpf: "",
        password: "",
        confirmPassword: "",
      });
    }
  }

  function montaFormularioSignUp() {
    return (
      <>
        <div>
          <Button type="submit">Cadastrar</Button>
        </div>
      </>
    );
  }

  const formularioSignIn = montaFormularioSignUp();

  return (
    <>
      <HeaderComponent />
      <Main>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
        <FundoProducts>
          <img
            src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg"
            alt=""
          />
          <h2>Nome do produto</h2>
          <h3> R$ 999,99 </h3>
        </FundoProducts>
      </Main>
      <FooterComponent />
    </>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 70px 0px;
  padding-bottom: 80px;
  //height: 100vh;
  background-color: #f2f2f2;

  img {
    width: 170px;
    margin-top: 10px;
  }
  h2 {
    color: black;
    font-weight: bold;
  }
  h3 {
    margin-bottom: 5px;
    color: green;
  }
`;
const FundoProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #cbcbcb;
  width: 200px;
  height: 250px;
  border-radius: 5px;
  margin: 15px;

  cursor: pointer;
`;

const StyledLink = styled(Link)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-decoration: none;
`;

const Button = styled.button`
  width: 85%;
  height: 46px;

  background: #347746;
  border-radius: 5px;
  border: none;

  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
  cursor: pointer;
`;
