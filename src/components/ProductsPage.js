import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from 'react-router';

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ProductItem from "./ProductItem";


export default function ProductsPage(){

    const navigate = useNavigate();
    const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get(`https://projeto14-pear-store.herokuapp.com/produtos`)
      .then((response) => {
        setProducts(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);
 
      function montaProdutos(){
        return (
            <>
                {products.map((el,index)=> (
                  <ProductItem key={index} id={el._id} name={el.name} price={el.price} image={el.image}/>

                ))}
            </>
        )
    }

  
    return (
        <>
            <HeaderComponent/>
            <Main>
                {montaProdutos()}
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
