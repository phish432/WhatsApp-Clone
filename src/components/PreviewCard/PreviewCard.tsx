import type { UserMessagePreview } from "../../types/types";
import DEFAULT_CLIENT from "../../constant/defaultClient";
import { useState } from "react";
import { useActiveUserContext } from "../../contexts/activeUserContext";
import { useMessagesContext } from "../../contexts/messagesContext";
import { useUsersContext } from "../../contexts/usersContext";
import ActionButton from "../ActionButton/ActionButton";
import Avatar from "../Avatar/Avatar";
import DeleteModal from "../DeleteModal/DeleteModal";
import PreviewContent from "../PreviewContent/PreviewContent";
import "./PreviewCard.css";

type Props = {
  preview: UserMessagePreview;
};

const PreviewCard = (props: Props) => {
  const { preview } = props;

  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const { activeUser, setActiveUser } = useActiveUserContext();
  const { messagesDispatch } = useMessagesContext();
  const { usersDispatch } = useUsersContext();

  const isActive = activeUser !== null && activeUser.id === preview.user.id;
  const removeConversationAndUser = () => {
    messagesDispatch({
      type: "REMOVE_CONVERSATION",
      payload: { userAId: DEFAULT_CLIENT.id, userBId: preview.user.id },
    });
    usersDispatch({
      type: "REMOVE_USER",
      payload: preview.user.id,
    });
    setActiveUser(null);
  };

  return (
    <>
      <div
        className={`previewCard${isActive ? " active" : ""}`}
        onClick={() => setActiveUser(preview.user)}
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      >
        <Avatar
          src={preview.user.profileImg}
          alt={preview.user.name}
        />
        <PreviewContent preview={preview} />
        {isTooltipOpen && (
          <div className="hoverTooltip">
            <ActionButton onClick={() => setIsDeleteModalOpen(true)}>
              Delete
            </ActionButton>
          </div>
        )}
      </div>
      {isDeleteModalOpen && (
        <DeleteModal
          confirmText="Delete Conversation"
          closeDeleteModal={() => setIsDeleteModalOpen(false)}
          deleteMethod={removeConversationAndUser}
        />
      )}
    </>
  );
};

export default PreviewCard;
