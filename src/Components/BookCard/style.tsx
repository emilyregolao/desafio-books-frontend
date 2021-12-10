import styled from "styled-components";

export const Card = styled.li`
  cursor: pointer;
  width: 80%;
  min-width: 280px;
  max-width: 300px;
  height: 150px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease all 0.3s;

  &&:hover {
    transition: ease all 0.3s;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.5);
    border-radius: 10px;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 120px;
  margin-right: 20px;
`;

export const BookInfo = styled.div`
  h2 {
    font-size: 18px;
    font-weight: 500;
  }
  h3 {
    color: #ab2680;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  p {
    color: #999999;
    font-size: 12px;
    font-weight: 400;
  }
`;
