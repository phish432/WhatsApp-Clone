import type { UserMessagePreview } from "../../types/types";

import { useState } from "react";

import ActionButton from "../ActionButton/ActionButton";
import Avatar from "../Avatar/Avatar";
import DeleteModal from "../DeleteModal/DeleteModal";
import PreviewContent from "../PreviewContent/PreviewContent";

import "./PreviewCard.css";

type Props = {
  preview: UserMessagePreview;
  isActive: boolean;
  isSpacious: boolean;
  onClick: () => void;
  removeConversationAndUser: () => void;
};

const PreviewCard = (props: Props) => {
  const { preview, isActive, isSpacious, onClick, removeConversationAndUser } =
    props;

  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`previewCard${isActive ? " active" : ""}`}
        onClick={onClick}
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      >
        <Avatar
          src={preview.user.profileImg}
          alt={preview.user.name}
        />

        <PreviewContent
          preview={preview}
          isSpacious={isSpacious}
        />

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
