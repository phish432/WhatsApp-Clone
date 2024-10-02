import type { Dispatch, SetStateAction } from "react";
import type { User, UserMessagePreview } from "../../types/types";

import PreviewCard from "../PreviewCard/PreviewCard";

type Props = {
  activeUser: User | null;
  isSpacious: boolean;
  previews: UserMessagePreview[];
  removeConvAndUser: (userId: User["id"]) => void;
  setActiveUser: Dispatch<SetStateAction<User | null>>;
};

const ConversationsMain = (props: Props) => {
  const { activeUser, isSpacious, previews, removeConvAndUser, setActiveUser } =
    props;

  return (
    <>
      {previews.map((preview) => (
        <PreviewCard
          key={preview.user.id}
          isActive={activeUser?.id === preview.user.id}
          isSpacious={isSpacious}
          preview={preview}
          removeConvAndUser={removeConvAndUser}
          setActiveUser={setActiveUser}
        />
      ))}
    </>
  );
};

export default ConversationsMain;
