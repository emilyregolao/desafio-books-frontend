import styled from "styled-components";

export const Form = styled.form`
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  position: absolute;
  bottom: 90px;
  left: 15px;

  @media screen and (min-width: 509px) {
    top: 330px;
    left: 170px;
  }
`;

export const Button = styled.button`
  color: #b22e6f;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  width: 75px;
  height: 30px;
  position: relative;
  bottom: 50px;
  left: 160px;
  transition: ease all 0.3s;

  @media screen and (min-width: 375px) {
    left: 200px;
  }
  @media screen and (min-width: 437px) {
    left: 230px;
  }
  @media screen and (min-width: 509px) {
    left: -90px;
    top: 1px;
  }

  &&:hover {
    border-radius: 8px;
    transition: ease all 0.3s;
  }
`;

export const Input = styled.input`
  width: 95%;
  min-width: 250px;
  max-width: 320px;
  height: 60px;
  border-radius: 4px;
  border: none;
  margin: 6px auto;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);

  &&::placeholder {
    font-family: Heebo;
    color: #ffffff;
    opacity: 0.5;
    position: relative;
    bottom: 10px;
    left: 5px;
  }
`;

export const ErrorImage = styled.img`
  position: absolute;
  top: 150px;
  left: 2px;
  width: 160px;

  @media screen and (min-width: 509px) {
    width: 230px;
  }
`;
