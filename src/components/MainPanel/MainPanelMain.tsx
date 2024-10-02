import type { Dispatch } from "react";
import type { Message, MessageAction, User } from "../../types/types";

import { DEFAULT_CLIENT } from "../../constant";

import { useMemo, useRef } from "react";

import getOrderedChatHistoryOfAB from "../../utils/getChatHistory";

import ChatArea from "../ChatArea/ChatArea";
import TextComposer from "../TextComposer/TextComposer";

type Props = {
  activeUser: User;
  isSpacious: boolean;
  messages: Message[];
  messagesDispatch: Dispatch<MessageAction>;
};

const MainPanelMain = (props: Props) => {
  const { activeUser, isSpacious, messages, messagesDispatch } = props;

  const chatAreaRef = useRef<HTMLDivElement>(null);

  const chatHistory = useMemo(
    () => getOrderedChatHistoryOfAB(DEFAULT_CLIENT.id, activeUser.id, messages),
    [messages, activeUser],
  );

  return (
    <>
      <ChatArea
        chatAreaRef={chatAreaRef}
        isSpacious={isSpacious}
        chatHistory={chatHistory}
        messagesDispatch={messagesDispatch}
      />

      <TextComposer
        key={activeUser.id}
        activeUser={activeUser}
        chatAreaRef={chatAreaRef}
        messagesDispatch={messagesDispatch}
      />
    </>
  );
};

export default MainPanelMain;
