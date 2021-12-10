import { UserProvider } from "./UserProvider";
import { ProvidersType } from "../Interfaces/index";

const Providers = ({ children }: ProvidersType) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
