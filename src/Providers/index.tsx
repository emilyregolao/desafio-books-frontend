import { UserProvider } from "./UserProvider";
import { ProvidersType } from "../Interfaces/index";
import { BooksProvider } from "./BooksProvider";
const Providers = ({ children }: ProvidersType) => {
  return (
    <UserProvider>
      <BooksProvider>{children}</BooksProvider>
    </UserProvider>
  );
};

export default Providers;
