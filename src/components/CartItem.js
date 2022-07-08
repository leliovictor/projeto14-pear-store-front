import styled from "styled-components";

export default function CartItem({index}) {
  return (
    <Content>
      <NumberItem>
        <h1>Produto {index}</h1>
      </NumberItem>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: 258px;

  background-color: #d4d4d4;
  border-radius: 17px;
`;

const NumberItem = styled.div`
  width: 100%;
  height: 47px;

  border-bottom: 1px solid #ffffff;
`;
