import type { Dispatch, SetStateAction } from "react";
import type { User, UserMessagePreview } from "../../types/types";

import PreviewCard from "../PreviewCard/PreviewCard";

import "./Conversations.css";

type Props = {
  activeUser: User | null;
  setActiveUser: Dispatch<SetStateAction<User | null>>;
  isSpacious: boolean;
  previews: UserMessagePreview[];
  removeConversationAndUser: (userId: User["id"]) => void;
};

const Conversations = (props: Props) => {
  const {
    activeUser,
    setActiveUser,
    isSpacious,
    previews,
    removeConversationAndUser,
  } = props;

  return (
    <div className="conversations">
      {previews.map((preview) => (
        <PreviewCard
          key={preview.user.id}
          preview={preview}
          isActive={activeUser?.id === preview.user.id}
          isSpacious={isSpacious}
          onClick={() => setActiveUser(preview.user)}
          removeConversationAndUser={() => {
            removeConversationAndUser(preview.user.id);
            setActiveUser(null);
          }}
        />
      ))}
    </div>
  );
};

export default Conversations;
