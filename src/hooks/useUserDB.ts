import { User } from "../types/types";
import { useReducer } from "react";

type UserAction =
  | { type: "ADD_USER"; payload: User }
  | { type: "REMOVE_USER"; payload: User["id"] };

function useUserDB(key: string, initialValue: User[]) {
  const item = window.localStorage.getItem(key);

  let userDB: User[];
  if (item === null) {
    userDB = initialValue;
    window.localStorage.setItem(key, JSON.stringify(initialValue));
  } else {
    userDB = JSON.parse(item) as User[];
  }

  const usersReducer = (state: User[], action: UserAction) => {
    switch (action.type) {
      case "ADD_USER": {
        const nextState = [...state, action.payload];
        window.localStorage.setItem(key, JSON.stringify(nextState));
        return nextState;
      }
      case "REMOVE_USER": {
        const nextState = state.filter((user) => user.id !== action.payload);
        window.localStorage.setItem(key, JSON.stringify(nextState));
        return nextState;
      }
      default:
        return state;
    }
  };

  const [users, usersDispatch] = useReducer(usersReducer, userDB);

  return { users, usersDispatch } as const;
}

export default useUserDB;
