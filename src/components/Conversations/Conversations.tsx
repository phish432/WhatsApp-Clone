import type { User, UserMessagePreview } from "../../types/types";
import DEFAULT_CLIENT from "../../constant/defaultClient";
import { useActiveUserContext } from "../../contexts/activeUserContext";
import { useMessagesContext } from "../../contexts/messagesContext";
import { useUsersContext } from "../../contexts/usersContext";
import PreviewCard from "../PreviewCard/PreviewCard";
import getLatestMessageFromAToB from "../../utils/getLatestMessage";
import "./Conversations.css";

type Props = {
  searchUsers: User[];
};

const Conversations = (props: Props) => {
  const { searchUsers } = props;

  const { activeUser, setActiveUser } = useActiveUserContext();
  const { messages, messagesDispatch } = useMessagesContext();
  const { usersDispatch } = useUsersContext();

  const userPreviews = searchUsers
    .map(
      (user) =>
        ({
          user: user,
          latestMessage: getLatestMessageFromAToB(
            DEFAULT_CLIENT.id,
            user.id,
            messages,
          ),
        }) as UserMessagePreview,
    )
    .sort((a, b) => {
      if (!a.latestMessage) return 1;
      if (!b.latestMessage) return -1;
      return b.latestMessage.timestamp > a.latestMessage.timestamp ? 1 : -1;
    });

  const removeConversationUser = (client: User["id"], user: User["id"]) => {
    messagesDispatch({
      type: "REMOVE_CONVERSATION",
      payload: { userAId: client, userBId: user },
    });
    usersDispatch({
      type: "REMOVE_USER",
      payload: user,
    });
    setActiveUser(null);
  };

  return (
    <div className="conversations">
      {userPreviews.map((preview) => (
        <PreviewCard
          key={preview.user.id}
          preview={preview}
          isActive={activeUser !== null && activeUser.id === preview.user.id}
          onClick={() => setActiveUser(preview.user)}
          removeConversationAndUser={() =>
            removeConversationUser(DEFAULT_CLIENT.id, preview.user.id)
          }
        />
      ))}
    </div>
  );
};

export default Conversations;
