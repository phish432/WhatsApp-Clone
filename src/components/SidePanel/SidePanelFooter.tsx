import type { Dispatch } from "react";
import type { User, UserAction } from "../../types/types";

import defaultProfileImg from "../../assets/defaultUserImage.png";
import useShow from "../../hooks/useShow";

import ActionButton from "../ActionButton/ActionButton";
import NewChatModal from "../Modal/NewChatModal/NewChatModal";

type Props = {
  usersDispatch: Dispatch<UserAction>;
};

const SidePanelFooter = (props: Props) => {
  const { usersDispatch } = props;

  const [isChatModalOpen, openChatModal, closeChatModal] = useShow(false);

  const createNewChat = (name: string) => {
    const newUser: User = {
      id: window.crypto.randomUUID(),
      name: name,
      profileImg: defaultProfileImg,
    };

    usersDispatch({
      type: "ADD_USER",
      payload: newUser,
    });

    closeChatModal();
  };

  return (
    <>
      <ActionButton onClick={openChatModal}>Start New Chat</ActionButton>

      {isChatModalOpen && (
        <NewChatModal
          createChatMethod={createNewChat}
          onClose={closeChatModal}
        />
      )}
    </>
  );
};

export default SidePanelFooter;
