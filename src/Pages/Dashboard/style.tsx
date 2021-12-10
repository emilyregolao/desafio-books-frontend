import styled from "styled-components";
import MobileBackground from "../../Assets/Images/mobile-dashboard-bg.png";
import DesktopBackground from "../../Assets/Images/desktop-dashboard-bg.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background: url(${MobileBackground});

  @media screen and (min-width: 520px) {
    background: url(${DesktopBackground});
  }
`;

export const Header = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  width: 100%;
  margin-bottom: 50px;

  @media screen and (min-width: 569px) {
    left: 130px;
  }
`;

export const Logout = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 2px;

  @media screen and (min-width: 569px) {
    right: 270px;
  }
`;

export const LogoImage = styled.img`
  width: 90px;
  height: 33px;
  margin: 5px 10px 0px 20px;
`;

export const BooksList = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 569px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
