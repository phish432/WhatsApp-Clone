import { Message } from "../../constant/defaultMessages";
import { Connection } from "../../constant/connections";

function isMessageFromAToB(
  msg: Message,
  userA: string | null,
  userB: string | null,
) {
  return msg.fromConnId === userA && msg.toConnId === userB;
}

function getActiveMessages(
  activeConnection: Connection,
  allMessages: Message[],
): Message[] {
  const active = activeConnection.id;
  const client = null;

  let activeMessages = allMessages
    .filter(
      (msg) =>
        isMessageFromAToB(msg, active, client) ||
        isMessageFromAToB(msg, client, active),
    )
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return activeMessages;
}

export default getActiveMessages;
