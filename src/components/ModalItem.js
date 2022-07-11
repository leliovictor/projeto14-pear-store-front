import styled from "styled-components";

export default function ModalItem({ tag, value }) {
  return (
    <Content>
      <h1>{tag}: </h1>
      <h2>{value}</h2>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  height: fit-content;

  font-size: 18px;
  font-weight: 700px;
  color: #ffffff;
  height: fit-content;

  h2 {
      max-width: 70%;
      display: flex;
      align-items: center;
      text-align: center;
  }
`;
