import styled from "styled-components";
import { useState } from "react";

export default function CartItem({ index, name, price, image }) {
  const [howManyItems, setHowManyItems] = useState(1);

  function calcTotal() {
    const value = price.replace("R$", "").replace(",", ".");
    const valueNumber = parseFloat(value);
    const totalPrice = valueNumber * parseInt(howManyItems);
    const totalPriceString = `R$ ${totalPrice.toFixed(2).replace(".", ",")}`;

    return totalPriceString;
  }

  function setAmountItems(param) {
    if (param === "decrease" && howManyItems > 0) {
      setHowManyItems(howManyItems - 1);
    }
  }

  function checkAmountOfItem() {
    if (howManyItems < 0) return setHowManyItems(0);
  }

  checkAmountOfItem();

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
            value={howManyItems}
            onChange={(e) => setHowManyItems(e.target.value)}
          />
          <p onClick={() => setHowManyItems(howManyItems + 1)}>+</p>
        </Amount>
        <Price>
          <h1>Preço:</h1>
          <h2>{price}</h2>
        </Price>
      </AmountLine>
      <DeleteAndTotal>
        <ion-icon name="trash-outline"></ion-icon>
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
