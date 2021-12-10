import { createContext, useContext, useState } from "react";
import { ProvidersType, FormData, UserProviderTypes } from "../../Interfaces";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";

const UserContext = createContext<UserProviderTypes>({} as UserProviderTypes);

export const UserProvider = ({ children }: ProvidersType) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("Books@token") || ""
  );
  const history = useHistory();

  const login = (data: FormData) => {
    api
      .post("/auth/sign-in", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const logout = () => {
    setToken("");
    localStorage.clear();
    history.push("/");
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
