import { ReactNode } from "react";

export interface ProvidersType {
  children: ReactNode;
}

export interface UserProviderTypes {
  token: string;
  name: string;
  login: (data: FormData) => void;
  logout: () => void;
}

export interface FormData {
  email: string;
  password: string;
}

export interface BooksProviderTypes {
  books: Book[];
  page: number;
  nextPage: () => void;
  backPage: () => void;
}

export interface BookCardType {
  book: Book;
}

export interface BookDetailType {
  book: Book;
  closeModal: () => void;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
}
