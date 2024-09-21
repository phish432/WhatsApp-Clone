import React from "react";
import useActiveUser from "../hooks/useActiveUser";
import { ActiveUserContext } from "./activeUserContext";

type Props = { children?: React.ReactNode };

const ActiveUserProvider = (props: Props) => {
  const { children } = props;

  const { activeUser, setActiveUser } = useActiveUser(null);

  return (
    <ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </ActiveUserContext.Provider>
  );
};

export default ActiveUserProvider;
