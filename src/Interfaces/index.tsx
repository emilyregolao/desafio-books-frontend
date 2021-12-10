import { ReactNode } from "react";

export interface ProvidersType {
  children: ReactNode;
}
export interface UserProviderTypes {
  token: string;
  login: (data: FormData) => void;
  logout: () => void;
}

export interface FormData {
  email: string;
  password: string;
}
