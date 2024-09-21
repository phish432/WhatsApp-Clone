import type { User, Message } from "../types/types";
import isMessageFromAToB from "./isMessageFromAToB";

function getOrderedChatHistoryOfAB(
  userAId: User["id"],
  userBId: User["id"],
  messages: Message[],
) {
  const chatHistory = messages
    // get all messages in conversation
    .filter((message) => {
      return (
        isMessageFromAToB(message, userAId, userBId) ||
        isMessageFromAToB(message, userBId, userAId)
      );
    })
    // sort by timestamp with latest message first
    .sort((a, b) => {
      return b.timestamp > a.timestamp ? 1 : -1;
    });

  return chatHistory;
}

export default getOrderedChatHistoryOfAB;
