import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function Productitem({ _id, image, name, price }) {
  const { userInfo } = useContext(UserContext);

  const [selected, setSelected] = useState(false);

  function selectItem() {
    if (!selected) {
      const promise = axios.post(
        "https://projeto14-pear-store.herokuapp.com/produtos",
        { _id },
        userInfo.config
      );

      promise.then(setSelected(true));
      promise.catch((e) => {
        console.log(e);
        setSelected(false);
      });
    }
  }

  return (
    <FundoProducts selected={selected} onClick={() => selectItem()}>
      <img src={image} />
      <h2>{name}</h2>
      <h3>{price}</h3>
    </FundoProducts>
  );
}

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

  border: ${(props) => (props.selected ? "3px solid #347746" : "")};

  cursor: pointer;
`;
