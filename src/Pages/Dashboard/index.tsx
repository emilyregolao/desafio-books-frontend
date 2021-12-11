import BookCard from "../../Components/BookCard";
import {
  Container,
  Header,
  Logout,
  LogoImage,
  BooksList,
  Pagination,
} from "./style";
import Logo from "../../Assets/Images/logo-black.png";
import LogoutButton from "../../Assets/Images/logout-btn.png";
import { useUser } from "../../Providers/UserProvider";
import { useBooks } from "../../Providers/BooksProvider";
import Next from "../../Assets/Images/next-page.png";
import Back from "../../Assets/Images/back-page.png";

const Dashboard = () => {
  const { logout, name } = useUser();
  const { books, page, backPage, nextPage } = useBooks();

  return (
    <Container>
      <Header>
        <div className="logo">
          <LogoImage alt="ioasys-logo" src={Logo} />
          <h1>Books</h1>
        </div>

        <div className="greeting">
          <span className="greeting-desktop">
            <p>Bem-vindo,</p>
            <p className="name">{name}!</p>
          </span>
          <Logout onClick={logout}>
            <img alt="logout-button" src={LogoutButton} />
          </Logout>
        </div>
      </Header>
      <BooksList>
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </BooksList>
      <Pagination>
        <button onClick={backPage}>
          <img alt="back" src={Back} />
        </button>
        <p>
          Página <strong>{page}</strong> de <strong>42</strong>
        </p>
        <button onClick={nextPage}>
          <img alt="next" src={Next} />
        </button>
      </Pagination>
    </Container>
  );
};
export default Dashboard;
