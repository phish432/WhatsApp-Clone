import { useState } from "react";

import ActionButton from "../ActionButton/ActionButton";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

import "./MessageBox.css";

type Props = (
  | {
      isOutgoing: false;
    }
  | {
      isOutgoing: true;
      removeMessage: () => void;
      updateMessage: (newContent: string) => void;
    }
) & {
  isSpacious: boolean;
  content: string;
  time: string;
};

const MessageBox = (props: Props) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  if (props.isOutgoing) {
    const { isSpacious, content, time, removeMessage, updateMessage } = props;

    const handleDeleteClick = () => {
      setIsEditModalOpen(false);
      setIsDeleteModalOpen(true);
    };

    const handleEditClick = () => {
      setIsDeleteModalOpen(false);
      setIsEditModalOpen(true);
    };

    return (
      <>
        <div
          className="messageBox outgoing"
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
        >
          <div className="text">{content}</div>
          {isSpacious && <div className="time">{time}</div>}

          {isTooltipOpen && (
            <div className="hoverTooltip">
              <ActionButton onClick={handleEditClick}>Edit</ActionButton>
              <ActionButton onClick={handleDeleteClick}>Delete</ActionButton>
            </div>
          )}
        </div>

        {isEditModalOpen && (
          <EditModal
            oldContent={content}
            closeEditModal={() => setIsEditModalOpen(false)}
            editMethod={updateMessage}
          />
        )}

        {isDeleteModalOpen && (
          <DeleteModal
            confirmText="Delete Message"
            closeDeleteModal={() => setIsDeleteModalOpen(false)}
            deleteMethod={removeMessage}
          />
        )}
      </>
    );
  }

  const { isSpacious, content, time } = props;
  return (
    <div className="messageBox incoming">
      <div className="text">{content}</div>
      {isSpacious && <div className="time">{time}</div>}
    </div>
  );
};

export default MessageBox;
