import { Message } from "../types/types";

function isMessageFromAToB(msg: Message, userA: string, userB: string) {
  return msg.fromConnId === userA && msg.toConnId === userB;
}

export default isMessageFromAToB;
