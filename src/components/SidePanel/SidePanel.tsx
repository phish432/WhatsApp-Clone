import type { Dispatch, SetStateAction } from "react";
import type { Message, MessageAction, User } from "../../types/types";

import { DEFAULT_CLIENT } from "../../constant";

import { useState } from "react";

import ActionButton from "../ActionButton/ActionButton";
import Avatar from "../Avatar/Avatar";
import Conversations from "../Conversations/Conversations";
import Fallback from "../Fallback/Fallback";
import Header from "../Header/Header";
import NewChatModal from "../NewChatModal/NewChatModal";
import SearchBar from "../SearchBar/SearchBar";

import useUserDB from "../../hooks/useUserDB";
import getPreviews from "../../utils/getPreviews";
import searchPreviewsByUserName from "../../utils/searchUsersByName";

import "./SidePanel.css";

type Props = {
  activeUser: User | null;
  setActiveUser: Dispatch<SetStateAction<User | null>>;
  isSpacious: boolean;
  setIsSpacious: Dispatch<SetStateAction<boolean>>;
  messages: Message[];
  messagesDispatch: Dispatch<MessageAction>;
};

const SidePanel = (props: Props) => {
  const {
    activeUser,
    setActiveUser,
    isSpacious,
    setIsSpacious,
    messages,
    messagesDispatch,
  } = props;

  const [users, usersDispatch] = useUserDB("usrDB", []);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isChatModalOpen, setIsChatModalOpen] = useState<boolean>(false);

  const otherUsers = users.filter((user) => user.id !== DEFAULT_CLIENT.id);
  const previews = getPreviews(otherUsers, messages, DEFAULT_CLIENT.id);
  const searchPreviews = searchPreviewsByUserName(previews, searchTerm);

  const createNewChat = async (name: string) => {
    const image = await fetch(
      "https://ui-avatars.com/api/?" +
        new URLSearchParams({
          name: name,
          size: "200",
        }),
    ).then((res) => res.blob());

    const newUser: User = {
      id: window.crypto.randomUUID(),
      name: name,
      profileImg: URL.createObjectURL(image),
    };

    usersDispatch({
      type: "ADD_USER",
      payload: newUser,
    });
  };

  const removeConversationAndUser = (userId: User["id"]) => {
    messagesDispatch({
      type: "REMOVE_CONVERSATION",
      payload: { userAId: DEFAULT_CLIENT.id, userBId: userId },
    });
    usersDispatch({
      type: "REMOVE_USER",
      payload: userId,
    });
  };

  return (
    <>
      <div className="sidePanel">
        <Header>
          <Avatar
            src={DEFAULT_CLIENT.profileImg}
            alt={DEFAULT_CLIENT.name}
          />
          <ActionButton onClick={() => setIsSpacious(!isSpacious)}>
            {isSpacious ? "Spacious" : "Compact"} Mode
          </ActionButton>
        </Header>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {searchPreviews.length === 0 ? (
          <Fallback>No Conversations Yet</Fallback>
        ) : (
          <Conversations
            activeUser={activeUser}
            setActiveUser={setActiveUser}
            isSpacious={isSpacious}
            previews={previews}
            removeConversationAndUser={removeConversationAndUser}
          />
        )}

        <ActionButton onClick={() => setIsChatModalOpen(true)}>
          Start New Chat
        </ActionButton>
      </div>

      {isChatModalOpen && (
        <NewChatModal
          closeChatModal={() => setIsChatModalOpen(false)}
          createChatMethod={(name) => {
            createNewChat(name);
            setIsChatModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default SidePanel;
