import DEFAULT_MESSAGES from "../constant/defaultMessages";
import React from "react";
import useMessageDB from "../hooks/useMessageDB";
import { MessagesContext } from "./messagesContext";

type Props = { children?: React.ReactNode };

const MessagesProvider = (props: Props) => {
  const { children } = props;

  const { messages, messagesDispatch } = useMessageDB(
    "messageDB",
    DEFAULT_MESSAGES,
  );

  return (
    <MessagesContext.Provider value={{ messages, messagesDispatch }}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
