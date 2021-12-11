import { BookDetailType } from "../../Interfaces/index";
import { Container, ModalContent, BookImage, CloseModalButton } from "./style";
import CloseButton from "../../Assets/Images/close-btn.png";
import QuoteMark from "../../Assets/Images/quote.png";
const BookDetails = ({ book, closeModal }: BookDetailType) => {
  const {
    title,
    authors,
    pageCount,
    imageUrl,
    publisher,
    published,
    language,
    isbn10,
    isbn13,
    description,
  } = book;

  return (
    <Container>
      <CloseModalButton onClick={closeModal}>
        <img src={CloseButton} alt="close-modal" />
      </CloseModalButton>
      <ModalContent>
        <BookImage alt={title} src={imageUrl} />
        <div className="data">
          <h2>{title}</h2>
          <h3>{authors}</h3>
          <h4 className="info">INFORMAÇÕES</h4>
          <div className="info-data">
            <span>
              <p className="info-title">Páginas</p>
              <p>{pageCount}</p>
            </span>
            <span>
              <p className="info-title">Editora</p>
              <p>{publisher}</p>
            </span>
            <span>
              <p className="info-title">Publicação</p>
              <p>{published}</p>
            </span>
            <span>
              <p className="info-title">Idioma</p>
              <p>{language}</p>
            </span>
            <span>
              <p className="info-title">Título Original</p> <p>{title}</p>
            </span>
            <span>
              <p className="info-title">ISBN-10</p>
              <p>{isbn10}</p>
            </span>
            <span>
              <p className="info-title">ISBN-13</p> <p>{isbn13}</p>
            </span>
          </div>

          <h4>RESENHA DA EDITORA</h4>

          <p className="description">
            <img src={QuoteMark} alt="quotation-mark" />
            {description}
          </p>
        </div>
      </ModalContent>
    </Container>
  );
};

export default BookDetails;
