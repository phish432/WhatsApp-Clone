import type { Dispatch, SetStateAction } from "react";
import type { User, UserMessagePreview } from "../../types/types";

import { memo, useRef } from "react";

import useShow from "../../hooks/useShow";

import ActionTooltip from "../ActionTooltip/ActionTooltip";
import Avatar from "../Avatar/Avatar";
import DeleteModal from "../Modal/DeleteModal/DeleteModal";
import PreviewContent from "./PreviewContent";

import "./PreviewCard.css";

type Props = {
  isActive: boolean;
  isSpacious: boolean;
  preview: UserMessagePreview;
  removeConvAndUser: (userId: User["id"]) => void;
  setActiveUser: Dispatch<SetStateAction<User | null>>;
};

const PreviewCard = (props: Props) => {
  const { preview, isActive, isSpacious, setActiveUser, removeConvAndUser } =
    props;

  const [isTooltipOpen, openTooltip, closeTooltip] = useShow(false);
  const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useShow(false);
  const previewCardRef = useRef<HTMLDivElement | null>(null);

  const handleRemove = () => {
    removeConvAndUser(preview.user.id);
    setActiveUser((prev) => (prev === preview.user ? null : prev));
    closeDeleteModal();
  };

  const tooltipTargetRect = previewCardRef.current?.getBoundingClientRect();

  return (
    <>
      <div
        className={`previewCard${isActive ? " active" : ""}`}
        ref={previewCardRef}
        onClick={() => setActiveUser(preview.user)}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
      >
        <Avatar
          alt={preview.user.name}
          src={preview.user.profileImg}
        />

        <PreviewContent
          isSpacious={isSpacious}
          preview={preview}
        />

        {isTooltipOpen && (
          <ActionTooltip
            buttons={[
              {
                name: "Delete",
                onClick: openDeleteModal,
              },
            ]}
            position="inside"
            targetRect={tooltipTargetRect}
          />
        )}
      </div>

      {isDeleteModalOpen && (
        <DeleteModal
          onClose={closeDeleteModal}
          title="Delete Conversation"
          onDelete={handleRemove}
        />
      )}
    </>
  );
};

const MemoizedPreviewCard = memo(PreviewCard);

export default MemoizedPreviewCard;
