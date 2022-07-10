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

    function montaFormularioSignUp(){
        return (
            <>
                <input type="text" id="name" value={userSignUp.name} placeholder="Nome" required
                    onChange={(e) => setUserSignUp({ ...userSignUp, name: e.target.value })} />

                <input type="email" id="email" value={userSignUp.email} placeholder="E-mail" required
                    onChange={(e) => setUserSignUp({ ...userSignUp, email: e.target.value })} />
                
                <input type="text" id="cpf" value={userSignUp.cpf} placeholder="CPF" required
                    onChange={(e) => setUserSignUp({ ...userSignUp, cpf: e.target.value })} />

                <input type="password" id="password" value={userSignUp.password} placeholder="Senha" required
                    onChange={(e) => setUserSignUp({ ...userSignUp, password: e.target.value })} />

                <input type="password" id="confirmPassword" value={userSignUp.confirmPassword} placeholder="Confirme a senha" required
                    onChange={(e) => setUserSignUp({ ...userSignUp, confirmPassword: e.target.value })} />

                <div>
                    <Button type="submit">Cadastrar</Button>
                </div>
            </>
        )
    }

    const formularioSignUp = montaFormularioSignUp();

    return (
        <>
            <Main>
                <img src={Logo} alt="Logo" />
                <h1> Pear Store </h1>
            <FormularioCompra onSubmit={postRegister}>
                    {formularioSignUp}
            </FormularioCompra>
            <StyledLink to="/"> Já tem uma conta? Entre agora! </StyledLink>
            </Main>
        </>

    )
}


const FormularioCompra = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    
    input {
        
    height: 58px;
    background: #ffffff;
    border-radius: 5px;

    margin-bottom: 13px;
    border: none;

    font-size: 20px;
    line-height: 23px;

    }
   
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  
    height: 100vh;
    
    img { 
        width: 100px;
    }

    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF; 
    }
    
` ;

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
    width: 100%;
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