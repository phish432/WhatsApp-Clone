import type { User } from "../../types/types";
import DEFAULT_CLIENT from "../../constant/defaultClient";
import { useState } from "react";
import { useUsersContext } from "../../contexts/usersContext";
import ActionButton from "../ActionButton/ActionButton";
import Avatar from "../Avatar/Avatar";
import Conversations from "../Conversations/Conversations";
import Header from "../Header/Header";
import NewChatModal from "../NewChatModal/NewChatModal";
import SearchBar from "../SearchBar/SearchBar";
import searchUsersByName from "../../utils/searchUsersByName";
import "./SidePanel.css";

const SidePanel = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isChatModalOpen, setIsChatModalOpen] = useState<boolean>(false);
  const { users, usersDispatch } = useUsersContext();

  const otherUsers = users.filter((user) => user.id !== DEFAULT_CLIENT.id);
  const searchUsers = searchUsersByName(otherUsers, searchTerm);

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
    setIsChatModalOpen(false);
  };

  return (
    <>
      <div className="sidePanel">
        <Header>
          <Avatar
            src={DEFAULT_CLIENT.profileImg}
            alt={DEFAULT_CLIENT.name}
          />
        </Header>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Conversations searchUsers={searchUsers} />
        <ActionButton onClick={() => setIsChatModalOpen(true)}>
          Start New Chat
        </ActionButton>
      </div>
      {isChatModalOpen && (
        <NewChatModal
          closeChatModal={() => setIsChatModalOpen(false)}
          createChatMethod={createNewChat}
        ></NewChatModal>
      )}
    </>
  );
};

export default SidePanel;
