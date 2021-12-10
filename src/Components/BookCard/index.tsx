import { BookCardType } from "../../Interfaces/index";
import { Card, Image, BookInfo } from "./style";

const BookCard = ({ book }: BookCardType) => {
  const { id, title, authors, pageCount, imageUrl, publisher, published } =
    book;

  const handleClick = () => {
    console.log(title);
  };
  return (
    <Card key={id} onClick={handleClick}>
      <Image alt={title} src={imageUrl} />
      <BookInfo>
        <h2>{title}</h2>
        <h3>{authors}</h3>
        <p>{pageCount} páginas</p>
        <p>Editora {publisher}</p>
        <p>Publicado em {published}</p>
      </BookInfo>
    </Card>
  );
};

export default BookCard;
