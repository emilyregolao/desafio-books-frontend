import styled from "styled-components";
import MobileBackground from "../../Assets/Images/mobile-dashboard-bg.png";
import DesktopBackground from "../../Assets/Images/desktop-dashboard-bg.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background: url(${MobileBackground});
  padding-bottom: 50px;

  @media screen and (min-width: 520px) {
    background-size: cover;
    background: url(${DesktopBackground}) no-repeat;
    background-attachment: fixed;
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px 4%;
  .logo {
    display: flex;
  }
  .greeting {
    display: flex;
    align-items: center;
    position: relative;
    right: 0;
  }
  .greeting-desktop {
    display: none;
  }

  @media screen and (min-width: 569px) {
    .greeting-desktop {
      display: flex;
    }
    span p {
      margin: 0px 3px;
    }
    .name {
      font-weight: 500;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background-color: transparent;
`;

export const LogoImage = styled.img`
  width: 90px;
  height: 33px;
  margin: 5px 10px 0px 20px;
`;

export const BooksList = styled.ul`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 569px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
  }
  img {
    margin: 0px 5px;
  }
  p {
    margin: 0px 5px;
  }

  @media screen and (min-width: 520px) {
    justify-content: flex-end;
    margin-right: 55px;
    p {
      order: -1;
    }
  }
`;
