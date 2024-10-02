import type { Dispatch, SetStateAction } from "react";
import type {
  Message,
  MessageAction,
  User,
  UserAction,
} from "../../types/types";

import { DEFAULT_CLIENT } from "../../constant";

import { useCallback, useMemo, useState } from "react";

import getPreviews from "../../utils/getPreviews";
import searchPreviewsByUserName from "../../utils/searchUsersByName";

import Conversations from "../Conversations/Conversations";
import SearchBar from "../SearchBar/SearchBar";

type Props = {
  activeUser: User | null;
  isSpacious: boolean;
  messages: Message[];
  users: User[];
  messagesDispatch: Dispatch<MessageAction>;
  setActiveUser: Dispatch<SetStateAction<User | null>>;
  usersDispatch: Dispatch<UserAction>;
};

const SidePanelMain = (props: Props) => {
  const {
    activeUser,
    isSpacious,
    messages,
    users,
    messagesDispatch,
    setActiveUser,
    usersDispatch,
  } = props;

  const [searchTerm, setSearchTerm] = useState<string>("");

  const previews = useMemo(
    () => getPreviews(users, messages, DEFAULT_CLIENT.id),
    [users, messages],
  );

  const searchPreviews = useMemo(
    () => searchPreviewsByUserName(previews, searchTerm),
    [previews, searchTerm],
  );

  const removeConvAndUser = useCallback(
    (userId: User["id"]) => {
      console.log("r");
      messagesDispatch({
        type: "REMOVE_CONVERSATION",
        payload: { userAId: DEFAULT_CLIENT.id, userBId: userId },
      });
      usersDispatch({
        type: "REMOVE_USER",
        payload: userId,
      });
    },
    [messagesDispatch, usersDispatch],
  );

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Conversations
        activeUser={activeUser}
        isSpacious={isSpacious}
        previews={searchPreviews}
        removeConvAndUser={removeConvAndUser}
        setActiveUser={setActiveUser}
      />
    </>
  );
};

export default SidePanelMain;
