import { createContext, useContext, useState, useEffect } from "react";
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

  const nextPage = () => {
    if (page <= 41) {
      setPage(page + 1);
    }
  };

  const backPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    api
      .get("/books", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page: `${page.toString()}`, amount: "12" },
      })
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <BooksContext.Provider value={{ books, page, nextPage, backPage }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  return useContext(BooksContext);
};
