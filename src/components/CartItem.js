import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function CartItem({
  index,
  name,
  price,
  image,
  howManyItems,
  setHowManyItems,
  refresh,
  setRefresh,
}) {
  const { userInfo } = useContext(UserContext);

  function calcTotal() {
    const value = price.replace("R$", "").replace(".","").replace(",", ".");
    const valueNumber = parseFloat(value);
    const totalPrice = valueNumber * parseInt(howManyItems[index]);
    const totalPriceString = `R$ ${totalPrice.toFixed(2).replace(".", ",")}`;

    console.log(howManyItems[index]);

    return totalPriceString;
  }

  function setAmountItems(param, event) {
    if (param === "decrease") return decrease();
    if (param === "increase") return increase();

    if (event) return changeInput(event.target.value);
  }

  function decrease() {
    if (howManyItems[index] > 0) {
      const arrayOfAmount = [...howManyItems];
      arrayOfAmount[index] = howManyItems[index] - 1;
      setHowManyItems(arrayOfAmount);
    }
  }

  function increase() {
    const arrayOfAmount = [...howManyItems];
    arrayOfAmount[index] = howManyItems[index] + 1;
    setHowManyItems(arrayOfAmount);
  }

  function changeInput(value) {
    if (value > 0) {
      const arrayOfAmount = [...howManyItems];
      arrayOfAmount[index] = value;
      setHowManyItems(arrayOfAmount);
    }
  }

  function checkAmountOfItem() {
    if (howManyItems[index] < 0) {
      const arrayOfAmount = [...howManyItems];
      arrayOfAmount[index] = 0;
      setHowManyItems(arrayOfAmount);
    }
  }

  checkAmountOfItem();

  function deleteProduct() {
    const text = `Gostaria de apagar o produto ${index + 1} do carrinho?`;
    if (window.confirm(text)) {
      try {
        const response = axios.delete(
          `https://projeto14-pear-store.herokuapp.com/cart/${index}`,
          userInfo.config
        );
        setRefresh(!refresh);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  }

  return (
    <Content>
      <h1>Produto {index + 1}</h1>
      <Tittle>
        <img src={image} alt="Product" />
        <h2>{name}</h2>
      </Tittle>
      <AmountLine>
        <Amount>
          <h1>Quantidade:</h1>
          <p onClick={() => setAmountItems("decrease")}>-</p>
          <input
            type="number"
            value={howManyItems[index]}
            onChange={(e) => setAmountItems("input", e)}
          />
          <p onClick={() => setAmountItems("increase")}>+</p>
        </Amount>
        <Price>
          <h1>Preço:</h1>
          <h2>{price}</h2>
        </Price>
      </AmountLine>
      <DeleteAndTotal>
        <ion-icon name="trash-outline" onClick={deleteProduct}></ion-icon>
        <div>
          <h1>Total:</h1>
          <h2>{calcTotal()}</h2>
        </div>
      </DeleteAndTotal>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: 258px;
  border-radius: 17px;
  padding: 10px;

  background-color: #d4d4d4;

  margin-bottom: 15px;

  > h1 {
    font-size: 15px;
    line-height: 14px;

    height: 37px;
    width: 100%;
    border-bottom: 1px solid #ffffff;

    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }
`;

const Tittle = styled.div`
  width: 100%;
  max-height: 120px;
  display: flex;

  align-items: center;
  margin-bottom: 10px;

  img {
    width: 120px;
    height: 120px;

    margin-right: 10px;
  }

  h2 {
    width: 100%;
    font-size: 20px;
    max-height: 130px;
    overflow: scroll;
    word-break: break-all;
    text-align: center;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Amount = styled.div`
  font-size: 15px;

  display: flex;
  align-items: center;

  h1 {
    padding-right: 5px;
  }

  input {
    width: 25px;
    display: flex;

    align-items: center;
    text-align: center;

    border: none;
    background-color: #d4d4d4;
  }

  p {
    padding: 5px;
  }
`;

const AmountLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  h1 {
    padding-right: 10px;
  }
`;

const DeleteAndTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;

  width: 100%;
  height: 50px;

  div {
    display: flex;

    font-size: 16px;
  }
`;
