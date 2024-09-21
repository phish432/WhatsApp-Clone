import { createContext, useContext } from "react";
import useActiveUser from "../hooks/useActiveUser";

type ActiveUserContextType = ReturnType<typeof useActiveUser>;

const ActiveUserContext = createContext<ActiveUserContextType | null>(null);
const useActiveUserContext = () =>
  useContext(ActiveUserContext) as ActiveUserContextType;

export { ActiveUserContext, useActiveUserContext };
