import { Message } from "../../constant/defaultMessages";
import { Connection } from "../../constant/connections";

function isMessageFromAToB(msg: Message, userA: string, userB: string) {
  return msg.fromConnId === userA && msg.toConnId === userB;
}

function getActiveMessages(
  activeConnection: Connection,
  allMessages: Message[],
): Message[] {
  const active = activeConnection.id;
  const client = "user_id_0";

  let activeMessages = allMessages.filter(
    (msg) =>
      isMessageFromAToB(msg, active, client) ||
      isMessageFromAToB(msg, client, active),
  );

  return activeMessages;
}

export default getActiveMessages;
