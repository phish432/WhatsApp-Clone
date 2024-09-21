import type { Message, User } from "../types/types";

function isMessageFromAToB(
  msg: Message,
  userAId: User["id"],
  userBId: User["id"],
) {
  return msg.fromUserId === userAId && msg.toUserId === userBId;
}

export default isMessageFromAToB;
