import type { User, Message, UserMessagePreview } from "../types/types";

import getLatestMessageFromAToB from "./getLatestMessage";
import isMessageFromAToB from "./isMessageFromAToB";

function getPreviews(users: User[], messages: Message[], clientId: User["id"]) {
  return users
    .map((user) => {
      const latest = getLatestMessageFromAToB(clientId, user.id, messages);
      if (latest !== null) {
        return {
          user: user,
          latestMsg: {
            sender: isMessageFromAToB(latest, clientId, user.id)
              ? "You"
              : user.name,
            content: latest.content,
            time: new Date(latest.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
          },
        } as UserMessagePreview;
      }
      return {
        user: user,
      } as UserMessagePreview;
    })
    .sort((a, b) => {
      if (!a.latestMsg) return 1;
      if (!b.latestMsg) return -1;
      return b.latestMsg.time > a.latestMsg.time ? 1 : -1;
    });
}

export default getPreviews;
