import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from 'react-router';
import HeaderComponent from "./HeaderComponent";


export default function ProductsPage(){

    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const [selected, setSelected] = useState([])

  useEffect(() => {
    axios
      .get(`https://projeto14-pear-store.herokuapp.com/produtos`)
      .then((response) => {
        setProducts(response.data.products)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [selected])
 

      function montaProdutos(){
        return (
            <>
                {products.map((el) => {
                                return (
                                    <FundoProducts >
                                        <img src={el.image} alt="" />
                                        <h2>{el.name}</h2>
                                        <h3>{el.price}</h3>
                                    </FundoProducts>
                                )
                                })}
            </>
        )
    }
    // function adicionarProduto(e) {
        
    // }

    function goToCart() {
        navigate("/cart");
    }

    return (
        <>
            <HeaderComponent/>
           
            <Main>
                {montaProdutos}
            </Main>
        <Footer>
            <Button onClick={() => goToCart()}>
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
