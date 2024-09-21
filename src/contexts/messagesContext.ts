import { createContext, useContext } from "react";
import useMessageDB from "../hooks/useMessageDB";

type MessagesContextType = ReturnType<typeof useMessageDB>;

const MessagesContext = createContext<MessagesContextType | null>(null);
const useMessagesContext = () =>
  useContext(MessagesContext) as MessagesContextType;

export { MessagesContext, useMessagesContext };
