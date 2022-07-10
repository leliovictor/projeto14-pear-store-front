import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from 'react-router';
import Logo from "../assets/logo.png";

export default function RegisterPage(){
    const [userSignUp, setUserSignUp] = useState({ name: "", email: "", cpf: "", password: "", confirmPassword: ""});
    const navigate = useNavigate();

    async function postRegister (e) {
        e.preventDefault();
        try {
            const cpfValido = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/
            let resultCPF = cpfValido.test(userSignUp.cpf)
            if (resultCPF) {

                if((userSignUp.password === userSignUp.confirmPassword) && resultCPF) {
                    const data = { 
                        name: userSignUp.name, 
                        email: userSignUp.email, 
                        cpf: userSignUp.cpf,
                        password: userSignUp.password, 
                        confirmPassword: userSignUp.confirmPassword,

                    };
                    console.log(data)
                   
                    await axios.post("https://pear-store.herokuapp.com/register", data);
                        navigate("/");
                } else {
                    alert("As senhas não são iguais! Tente novamente.");
                    setUserSignUp({ name:"", email: "", cpf:"", password: "", confirmPassword:""});
                }
           } else {
            alert("Cpf invalido, o cpf deve ser no formato xxx.xxx.xxx-xx");
            setUserSignUp({ name:"", email: "", cpf:"", password: "", confirmPassword:""});
           }
            
        } catch (e) {
            alert(e.response.data);
            setUserSignUp({ name:"", email: "", cpf:"", password: "", confirmPassword:""});
        }
    } 
    function zerarUser() {
        setUserSignUp({ name:"", email: "", cpf:"", password: "", confirmPassword:""})
    }

    function montaFormularioSignUp(){
        return (
            <>
 
                <div>
                    <Button type="submit">Cadastrar</Button>
                </div>
            </>
        )
    }
    

    const formularioSignIn = montaFormularioSignUp();

    return (
        <>
        <Header>
            <img src={Logo} alt="Logo" />
            <h1> Pear Store </h1>
            
            <StyledLink to="/" onClick={zerarUser}> <ion-icon name="log-out-outline"></ion-icon> </StyledLink>
        </Header>
            <Main>
                
                <FundoProducts > 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
                <FundoProducts> 
                    <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/y/by-8188-pretob32107.jpg" alt="" />
                    <h2>Nome do produto</h2>
                    <h3> R$ 999,99 </h3>
                </FundoProducts>
               
               
            
            </Main>
        <Footer>
            <Button>
                <p> Ir para o carrinho </p>
            </Button>
        </Footer>
        </>

    )
}

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height: 80px;
    background-color: #47C760;
    position: fixed;
    left:0px;
    top: 0px;
    z-index: 2;

    img {
        width:80px;
        margin-left: 20px;
    }

    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF; 
        font-weight: bold;
    }

    ion-icon {
        font-size: 40px;
        margin-right: 20px;
    }
`
const Main = styled.main`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 80px 0px;
    /* height: 100vh;                           //mudar aqui */
    background-color: #F2F2F2;

    img { 
        width: 170px;
        margin-top: 10px;
    }
    h2 {
        color: black;
        font-weight: bold;
    }
    h3{
        margin-bottom: 5px;
        color: green;
    }

` ;
const FundoProducts = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   background-color: #CBCBCB;
    width: 200px;
    height: 250px;
    border-radius: 5px;
    margin: 15px;

    cursor: pointer;
   
   
`;



const StyledLink = styled(Link)`
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
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

const Footer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 80px;
    background-color: #47C760;
    position: fixed;
    left:0px;
    bottom: 0px;
    z-index: 1;

 p{
    font-size: 30px;
    font-weight: bold;
 }
 

`
