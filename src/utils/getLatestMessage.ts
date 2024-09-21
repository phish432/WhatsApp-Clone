import type { User, Message } from "../types/types";
import getOrderedChatHistoryOfAB from "./getChatHistory";

function getLatestMessageFromAToB(
  userAId: User["id"],
  userBId: User["id"],
  messages: Message[],
) {
  const chatHistoryOfAB = getOrderedChatHistoryOfAB(userAId, userBId, messages);

  if (chatHistoryOfAB.length === 0) {
    return null;
  }

  return chatHistoryOfAB[0];
}

export default getLatestMessageFromAToB;
