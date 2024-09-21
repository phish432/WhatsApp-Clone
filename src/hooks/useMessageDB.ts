import type { User, Message } from "../types/types";
import { useReducer } from "react";
import isMessageFromAToB from "../utils/isMessageFromAToB";

type MessageAction =
  | { type: "ADD_MESSAGE"; payload: Message }
  | { type: "REMOVE_MESSAGE"; payload: Message["id"] }
  | {
      type: "REMOVE_CONVERSATION";
      payload: { userAId: User["id"]; userBId: User["id"] };
    }
  | {
      type: "UPDATE_MESSAGE";
      payload: { id: Message["id"]; newContent: Message["content"] };
    };

function useMessageDB(key: string, initialValue: Message[]) {
  const item = window.localStorage.getItem(key);

  let messageDB: Message[];
  if (item === null) {
    messageDB = initialValue;
    window.localStorage.setItem(key, JSON.stringify(initialValue));
  } else {
    messageDB = JSON.parse(item) as Message[];
  }

  const messagesReducer = (state: Message[], action: MessageAction) => {
    switch (action.type) {
      case "ADD_MESSAGE": {
        const nextState = [...state, action.payload];
        window.localStorage.setItem(key, JSON.stringify(nextState));
        return nextState;
      }
      case "REMOVE_MESSAGE": {
        const nextState = state.filter(
          (message) => message.id !== action.payload,
        );
        window.localStorage.setItem(key, JSON.stringify(nextState));
        return nextState;
      }
      case "REMOVE_CONVERSATION": {
        const nextState = state.filter(
          (message) =>
            !isMessageFromAToB(
              message,
              action.payload.userAId,
              action.payload.userBId,
            ) &&
            !isMessageFromAToB(
              message,
              action.payload.userBId,
              action.payload.userAId,
            ),
        );
        window.localStorage.setItem(key, JSON.stringify(nextState));
        return nextState;
      }
      case "UPDATE_MESSAGE": {
        const nextState = state.map((message) => {
          if (message.id === action.payload.id) {
            return { ...message, content: action.payload.newContent };
          }
          return message;
        });
        window.localStorage.setItem(key, JSON.stringify(nextState));
        return nextState;
      }
      default: {
        return state;
      }
    }
  };

  const [messages, messagesDispatch] = useReducer(messagesReducer, messageDB);

  return { messages, messagesDispatch } as const;
}

export default useMessageDB;
