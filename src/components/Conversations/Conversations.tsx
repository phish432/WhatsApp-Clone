import type { User, UserMessagePreview } from "../../types/types";
import DEFAULT_CLIENT from "../../constant/defaultClient";
import { useMessagesContext } from "../../contexts/messagesContext";
import PreviewCard from "../PreviewCard/PreviewCard";
import getLatestMessageFromAToB from "../../utils/getLatestMessage";
import "./Conversations.css";

type Props = {
  searchUsers: User[];
};

const Conversations = (props: Props) => {
  const { searchUsers } = props;

  const { messages } = useMessagesContext();

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

  return (
    <div className="conversations">
      {userPreviews.map((preview) => (
        <PreviewCard
          key={preview.user.id}
          preview={preview}
        />
      ))}
    </div>
  );
};

export default Conversations;
