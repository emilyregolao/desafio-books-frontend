import { useState } from "react";
import { BookCardType } from "../../Interfaces/index";
import { Card, Image, BookInfo } from "./style";
import BookDetails from "../BookDetails/index";

const BookCard = ({ book }: BookCardType) => {
  const { id, title, authors, pageCount, imageUrl, publisher, published } =
    book;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Card key={id} onClick={handleModal}>
        <Image alt={title} src={imageUrl} />
        <BookInfo>
          <h2>{title}</h2>
          <h3>{authors}</h3>
          <p>{pageCount} páginas</p>
          <p>Editora {publisher}</p>
          <p>Publicado em {published}</p>
        </BookInfo>
      </Card>
      {isOpen && <BookDetails book={book} closeModal={handleModal} />}
    </>
  );
};

export default BookCard;
