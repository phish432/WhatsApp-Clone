import type { Message } from "../../types/types";
import { useState } from "react";
import { useMessagesContext } from "../../contexts/messagesContext";
import ActionButton from "../ActionButton/ActionButton";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import "./MessageBox.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
};

const MessageBox = (props: Props) => {
  const { message, isOutgoing } = props;
  const { content, timestamp } = message;
  const time24Hour = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const { messagesDispatch } = useMessagesContext();

  const handleDeleteClick = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(true);
  };

  const removeMessage = () =>
    messagesDispatch({
      type: "REMOVE_MESSAGE",
      payload: message.id,
    });

  const updateMessage = (newContent: string) =>
    messagesDispatch({
      type: "UPDATE_MESSAGE",
      payload: { id: message.id, newContent: newContent },
    });

  if (!isOutgoing) {
    return (
      <div className="messageBox incoming">
        <div className="text">{content}</div>
        <div className="time">{time24Hour}</div>
      </div>
    );
  }

  return (
    <>
      <div
        className="messageBox outgoing"
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
      >
        <div className="text">{content}</div>
        <div className="time">{time24Hour}</div>
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
};

export default MessageBox;
