import { createContext, useContext } from "react";
import useUserDB from "../hooks/useUserDB";

type UsersContextType = ReturnType<typeof useUserDB>;

const UsersContext = createContext<UsersContextType | null>(null);
const useUsersContext = () => useContext(UsersContext) as UsersContextType;

export { UsersContext, useUsersContext };
