import { BooksArray } from "../../booksMock";
import BookCard from "../../Components/BookCard";
import { Container, Header, Logout, LogoImage, BooksList } from "./style";
import Logo from "../../Assets/Images/logo-black.png";
import LogoutButton from "../../Assets/Images/logout-btn.png";

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <LogoImage alt="ioasys-logo" src={Logo} />
        <h1>Books</h1>
        <Logout>
          <img alt="logout-button" src={LogoutButton} />
        </Logout>
      </Header>
      <BooksList>
        {BooksArray.map((book) => (
          <BookCard book={book} />
        ))}
      </BooksList>
    </Container>
  );
};
export default Dashboard;
