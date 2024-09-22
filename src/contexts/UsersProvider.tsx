import React from "react";
import useUserDB from "../hooks/useUserDB";
import { UsersContext } from "./usersContext";

type Props = { children?: React.ReactNode };

const UsersProvider = (props: Props) => {
  const { children } = props;

  const { users, usersDispatch } = useUserDB("userDB", []);

  return (
    <UsersContext.Provider value={{ users, usersDispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
