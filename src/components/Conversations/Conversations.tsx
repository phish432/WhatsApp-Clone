import type { Dispatch, SetStateAction } from "react";
import type { User, UserMessagePreview } from "../../types/types";

import ConversationsFallback from "./ConversationsFallback";
import ConversationsMain from "./ConversationsMain";

import "./Conversations.css";

type Props = {
  activeUser: User | null;
  isSpacious: boolean;
  previews: UserMessagePreview[];
  removeConvAndUser: (userId: User["id"]) => void;
  setActiveUser: Dispatch<SetStateAction<User | null>>;
};

const Conversations = (props: Props) => {
  return (
    <div className="conversations">
      {props.previews.length === 0 ? (
        <ConversationsFallback />
      ) : (
        <ConversationsMain {...props} />
      )}
    </div>
  );
};

export default Conversations;
