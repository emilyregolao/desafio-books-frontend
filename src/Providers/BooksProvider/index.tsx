import { createContext, useContext, useState } from "react";
import { ProvidersType, BooksProviderTypes } from "../../Interfaces";
import api from "../../Services/api";
import { useUser } from "../UserProvider";

const BooksContext = createContext<BooksProviderTypes>(
  {} as BooksProviderTypes
);

export const BooksProvider = ({ children }: ProvidersType) => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState<number>(1);

  const { token } = useUser();

  const getBooks = () => {
    api
      .get(`books?page=${page}&amount=12`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <BooksContext.Provider value={{ books, getBooks, page }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  return useContext(BooksContext);
};
