import { createContext, useContext, useState } from "react";
import { ProvidersType, FormData, UserProviderTypes } from "../../Interfaces";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";

const UserContext = createContext<UserProviderTypes>({} as UserProviderTypes);

export const UserProvider = ({ children }: ProvidersType) => {
  const [token, setToken] = useState(
    () => localStorage.getItem("Books@token") || ""
  );
  const [name, setName] = useState(
    () => localStorage.getItem("Books@user") || ""
  );
  const history = useHistory();

  const login = (data: FormData) => {
    api
      .post("/auth/sign-in", data)
      .then((response) => {
        localStorage.setItem("Books@token", response.headers.authorization);
        localStorage.setItem("Books@user", response.data.name);
        setToken(response.headers.authorization);
        setName(response.data.name);
        history.push("/dashboard");
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    setToken("");
    setName("");
    localStorage.clear();
    history.push("/");
  };

  return (
    <UserContext.Provider value={{ token, name, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
