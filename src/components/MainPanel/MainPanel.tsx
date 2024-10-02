import type { Dispatch } from "react";
import type { Message, MessageAction, User } from "../../types/types";

import MainPanelFallback from "./MainPanelFallback";
import MainPanelHeader from "./MainPanelHeader";
import MainPanelMain from "./MainPanelMain";

import "./MainPanel.css";

type Props = {
  activeUser: User | null;
  isSpacious: boolean;
  messages: Message[];
  messagesDispatch: Dispatch<MessageAction>;
};

const MainPanel = (props: Props) => {
  const { activeUser, isSpacious, messages, messagesDispatch } = props;

  return (
    <div className="mainPanel">
      {activeUser === null ? (
        <MainPanelFallback />
      ) : (
        <>
          <MainPanelHeader activeUser={activeUser} />
          <MainPanelMain
            activeUser={activeUser}
            isSpacious={isSpacious}
            messages={messages}
            messagesDispatch={messagesDispatch}
          />
        </>
      )}
    </div>
  );
};

export default MainPanel;
