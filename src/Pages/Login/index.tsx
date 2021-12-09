import { Container, TitleContainer, LogoImage, Title } from "./style";
import Logo from "../../Assets/Images/logo.png";
import LoginForm from "../../Components/Form";

const Login = () => {
  return (
    <Container>
      <TitleContainer>
        <LogoImage alt="ioasys-logo" src={Logo} />
        <Title>Books</Title>
      </TitleContainer>
      <LoginForm />
    </Container>
  );
};
export default Login;
