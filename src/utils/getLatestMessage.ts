import type { Connection, Message } from "../types/types";
import getChatHistory from "./getChatHistory";

function getLatestMessage(connection: Connection, allMessages: Message[]) {
  const chatHistoryWithConnection = getChatHistory(connection, allMessages);

  if (chatHistoryWithConnection.length === 0) {
    return null;
  }

  return chatHistoryWithConnection[0];
}

export default getLatestMessage;
