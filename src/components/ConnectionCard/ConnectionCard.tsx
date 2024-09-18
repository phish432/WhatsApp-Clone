import { ConnectionWithPreview } from "../../types/types";
import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import Avatar from "../Avatar/Avatar";
import DeleteModal from "../DeleteModal/DeleteModal";
import Preview from "../Preview/Preview";
import "./ConnectionCard.css";

type Props = {
  preview: ConnectionWithPreview;
  onClick: () => void;
  isActive: boolean;
  deleteConversation: () => void;
};

const ConnectionCard = (props: Props) => {
  const { preview, onClick, isActive, deleteConversation } = props;

  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const { name, profileImg } = preview.connection;

  return (
    <>
      <div
        className={`connectionCard${isActive ? " active" : ""}`}
        onClick={onClick}
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      >
        <Avatar src={profileImg} alt={name} />
        <Preview preview={preview} />
        {isTooltipOpen && (
          <div className="hoverTooltip">
            <ActionButton onClick={handleDeleteClick}>Delete</ActionButton>
          </div>
        )}
      </div>
      {isDeleteModalOpen && (
        <DeleteModal
          closeDeleteModal={() => setIsDeleteModalOpen(false)}
          deleteMessage={deleteConversation}
          confirmText="Delete Conversation"
        />
      )}
    </>
  );
};

export default ConnectionCard;
