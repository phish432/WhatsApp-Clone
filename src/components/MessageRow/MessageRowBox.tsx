import type { Message } from "../../types/types";

import { useRef } from "react";

import useShow from "../../hooks/useShow";

import ActionTooltip from "../ActionTooltip/ActionTooltip";
import DeleteModal from "../Modal/DeleteModal/DeleteModal";
import EditModal from "../Modal/EditModal/EditModal";

type Props = (
  | {
      isOutgoing: false;
    }
  | {
      isOutgoing: true;
      removeMessage: (messageId: Message["id"]) => void;
      updateMessage: (messageId: Message["id"], content: string) => void;
    }
) & {
  isSpacious: boolean;
  message: Message;
};

const MessageRowBox = (props: Props) => {
  const { isOutgoing, isSpacious, message } = props;

  const messageBoxRef = useRef<HTMLDivElement>(null);
  const [isTooltipOpen, openTooltip, closeTooltip] = useShow(false);
  const [isEditModalOpen, openEditModal, closeEditModal] = useShow(false);
  const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useShow(false);

  const content = message.content;
  const time = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (isOutgoing) {
    const { removeMessage, updateMessage } = props;

    const handleDeleteClick = () => {
      closeEditModal();
      openDeleteModal();
    };

    const handleEditClick = () => {
      closeDeleteModal();
      openEditModal();
    };

    const editMethod = () => {
      return (newContent: string) => updateMessage(message.id, newContent);
    };

    const deleteMethod = () => removeMessage(message.id);

    const tooltipTargetRect = messageBoxRef.current?.getBoundingClientRect();

    return (
      <>
        <div
          className="messageRowBox"
          ref={messageBoxRef}
          onMouseEnter={openTooltip}
          onMouseLeave={closeTooltip}
        >
          <div className="text">{content}</div>
          {isSpacious && <div className="time">{time}</div>}

          {isTooltipOpen && (
            <ActionTooltip
              buttons={[
                { name: "Edit", onClick: handleEditClick },
                { name: "Delete", onClick: handleDeleteClick },
              ]}
              position="outside"
              targetRect={tooltipTargetRect}
            />
          )}
        </div>

        {isEditModalOpen && (
          <EditModal
            onClose={closeEditModal}
            oldContent={content}
            onEdit={editMethod}
          />
        )}

        {isDeleteModalOpen && (
          <DeleteModal
            onClose={closeDeleteModal}
            title="Delete Message?"
            onDelete={deleteMethod}
          />
        )}
      </>
    );
  }

  return (
    <div className="messageRowBox">
      <div className="text">{content}</div>
      {isSpacious && <div className="time">{time}</div>}
    </div>
  );
};

export default MessageRowBox;
