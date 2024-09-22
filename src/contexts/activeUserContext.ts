import { User } from "../types/types";
import { createContext, useContext } from "react";

type ActiveUserContextType = {
  activeUser: User | null;
  setActiveUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const ActiveUserContext = createContext<ActiveUserContextType | null>(null);
const useActiveUserContext = () =>
  useContext(ActiveUserContext) as ActiveUserContextType;

export { ActiveUserContext, useActiveUserContext };
