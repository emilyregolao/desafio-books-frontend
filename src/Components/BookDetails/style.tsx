import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  height: fit-content;
  margin: 64px auto 16px;
  padding-top: 24px;
  padding-bottom: 32px;
  background: #ffffff;
  border-radius: 4px;

  h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    margin: 0px 24px 10px;
  }
  h3 {
    font-weight: normal;
    font-size: 12px;
    color: #ab2680;
    margin: 0px 24px 32px;
  }
  h4 {
    font-size: 12px;
    margin: 24px 0px 0px 24px;
  }
  .info {
    position: relative;
    top: -15px;
  }

  .info-data {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    span {
      margin: 0px 24px;
      display: flex;
      justify-content: space-between;
    }
  }
  .info-title {
    font-weight: 500;
  }
  .description {
    font-size: 12px;
    margin: 24px 24px 0px;

    img {
      margin-right: 7px;
    }
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    width: 769px;

    .data {
      overflow-y: scroll;
      max-height: 351px;
    }
  }
`;

export const BookImage = styled.img`
  display: block;
  width: 240px;
  height: 351px;
  margin: 0px 24px 24px;
  filter: drop-shadow(0px 11.9008px 17.8512px rgba(0, 0, 0, 0.4));
`;

export const CloseModalButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 15px;
  right: 20px;
`;
