import type { User } from "../types/types";
import React, { useState } from "react";
import { ActiveUserContext } from "./activeUserContext";

type Props = { children?: React.ReactNode };

const ActiveUserProvider = (props: Props) => {
  const { children } = props;

  const [activeUser, setActiveUser] = useState<User | null>(null);

  return (
    <ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </ActiveUserContext.Provider>
  );
};

export default ActiveUserProvider;
