import type { Dispatch } from "react";
import type { User, UserAction } from "../../types/types";

import { memo } from "react";
import { v4 as uuid } from "uuid";

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

  const createNewUser = (name: string) => {
    const newUser: User = {
      id: uuid(),
      name: name,
      profileImg: defaultProfileImg,
    };

    usersDispatch({
      type: "ADD_USER",
      payload: newUser,
    });
  };

  const createChatMethod = (name: string) => {
    createNewUser(name);
    closeChatModal();
  };

  return (
    <>
      <ActionButton onClick={openChatModal}>Start New Chat</ActionButton>

      {isChatModalOpen && (
        <NewChatModal
          createChatMethod={createChatMethod}
          onClose={closeChatModal}
        />
      )}
    </>
  );
};

const MemoizedSidePanelFooter = memo(SidePanelFooter);

export default MemoizedSidePanelFooter;
