import styled from "styled-components";
import DesktopBackground from "../../Assets/Images/desktop-bg.png";
import MobileBackground from "../../Assets/Images/mobile-bg.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${MobileBackground});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 450px) {
    background-image: url(${DesktopBackground});
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: -15px;
  left: 2px;
  width: fit-content;
  display: flex;

  @media screen and (min-width: 509px) {
    top: 35px;
    left: 160px;
  }
`;

export const LogoImage = styled.img`
  position: absolute;
  left: 15px;
  top: 215px;
  width: 100px;
  height: 36px;
`;

export const Title = styled.h1`
  color: #ffffff;
  position: absolute;
  left: 130px;
  top: 215px;
`;
