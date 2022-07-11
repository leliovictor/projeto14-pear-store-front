import axios from "axios";
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";

import UserContext from "../contexts/UserContext";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ProductItem from "./ProductItem";


export default function ProductsPage() {

  const { userInfo } = useContext(UserContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = axios.get(`https://projeto14-pear-store.herokuapp.com/produtos`, userInfo.config);

    promise.then((response) => {
      setProducts(response.data);
    })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  function renderProducts() {
    return (
      <>
        {products.map((el, index) => (
          <ProductItem key={index} _id={el._id} name={el.name} price={el.price} image={el.image} />

        ))}
      </>
    )
  }

  return (
    <>
      <HeaderComponent />
      <Main>
        {renderProducts()}
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