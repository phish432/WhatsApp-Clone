import type { Connection, Message } from "../types/types";
import isMessageFromAToB from "./isMessageFromAToB";

function getChatHistory(connection: Connection, allMessages: Message[]): Message[] {
  const active = connection.id;
  const client = "user_id_0";

  const chatHistory = allMessages
    .filter((msg) => isMessageFromAToB(msg, active, client) || isMessageFromAToB(msg, client, active))
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
    .reverse();

  return chatHistory;
}

export default getChatHistory;
