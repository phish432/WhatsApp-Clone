import type { Dispatch, SetStateAction } from "react";
import type { Message, MessageAction, User } from "../../types/types";

import { DEFAULT_USERS } from "../../constant";

import useUserDB from "../../hooks/useUserDB";

import SidePanelFooter from "./SidePanelFooter";
import SidePanelHeader from "./SidePanelHeader";
import SidePanelMain from "./SidePanelMain";

import "./SidePanel.css";

type Props = {
  isSpacious: boolean;
  activeUser: User | null;
  messages: Message[];
  messagesDispatch: Dispatch<MessageAction>;
  setIsSpacious: Dispatch<SetStateAction<boolean>>;
  setActiveUser: Dispatch<SetStateAction<User | null>>;
};

const SidePanel = (props: Props) => {
  const {
    activeUser,
    isSpacious,
    messages,
    messagesDispatch,
    setActiveUser,
    setIsSpacious,
  } = props;

  const [users, usersDispatch] = useUserDB("usrDB", DEFAULT_USERS);

  return (
    <div className="sidePanel">
      <SidePanelHeader
        isSpacious={isSpacious}
        setIsSpacious={setIsSpacious}
      />

      <SidePanelMain
        activeUser={activeUser}
        isSpacious={isSpacious}
        messages={messages}
        users={users}
        messagesDispatch={messagesDispatch}
        setActiveUser={setActiveUser}
        usersDispatch={usersDispatch}
      />

      <SidePanelFooter usersDispatch={usersDispatch} />
    </div>
  );
};

export default SidePanel;
