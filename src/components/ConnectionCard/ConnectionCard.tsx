import type { ConnectionWithPreview } from "../../types/types";
import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import Avatar from "../Avatar/Avatar";
import DeleteModal from "../DeleteModal/DeleteModal";
import Preview from "../Preview/Preview";
import "./ConnectionCard.css";

type Props = {
  preview: ConnectionWithPreview;
  isActive: boolean;
  onClick: () => void;
  deleteConversation: () => void;
};

const ConnectionCard = (props: Props) => {
  const { preview, isActive, onClick, deleteConversation } = props;
  const { name, profileImg } = preview.connection;

  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <div
        className={`connectionCard${isActive ? " active" : ""}`}
        onClick={onClick}
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      >
        <Avatar
          src={profileImg}
          alt={name}
        />
        <Preview preview={preview} />
        {isTooltipOpen && (
          <div className="hoverTooltip">
            <ActionButton onClick={handleDeleteClick}>Delete</ActionButton>
          </div>
        )}
      </div>
      {isDeleteModalOpen && (
        <DeleteModal
          confirmText="Delete Conversation"
          closeDeleteModal={() => setIsDeleteModalOpen(false)}
          deleteMessage={deleteConversation}
        />
      )}
    </>
  );
};

export default ConnectionCard;
