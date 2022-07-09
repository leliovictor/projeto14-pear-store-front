import styled from "styled-components";
import { useState } from "react";

export default function CartItem({ index, name, price, image }) {
  
  set[howManyItems, setHowManyItems] = useState(1);
  
  function calcTotal() {
    const value = price.replace("R$", '').replace(",", ".");
    const valueNumber = parseFloat(value);
    const totalPrice = valueNumber * parseInt(howManyItems);
    const totalPriceString = `R$ ${totalPrice.toFixed(2).replace(".", ",")}`;

    return totalPriceString;
}
  
  return (
    <Content>
        <h1>Produto {index + 1}</h1>
        <div>
            <image src={image} alt="Product Image" />
            <h2>{name}</h2>
        </div>
        <div>
            <div>
                <h1>Quantidade:</h1>
                <p onClick={() => setHowManyItems(howManyItems - 1)}>-</p>
                <input type='number' value={howManyItems} onChange={e=>setHowManyItems(e.target.value)}/>
                <p onClick={() => setHowManyItems(howManyItems + 1)}>+</p>
            </div>
            <div>
                <h1>Preço:</h1>
                <h2>{price}</h2>
            </div>
        </div>
        <div>
            <ion-icon name="trash-outline"></ion-icon>
            <div>
                <h1>Total:</h1>
                <h2>{calcTotal()}</h2>
            </div>
        </div>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: 258px;
  border-radius: 17px;

  background-color: #d4d4d4;
`;

const NumberItem = styled.div`
  width: 100%;
  height: 47px;

  border-bottom: 1px solid #ffffff;
`;
