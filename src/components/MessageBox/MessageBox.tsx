import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import MessageContent from "../MessageContent/MessageContent";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import "./MessageBox.css";

type Props = {
  content: string;
  timestamp: Date;
  isOutgoing: boolean;
  deleteMessage: () => void;
  editMessage: (newContent: string) => void;
};

const MessageBox = (props: Props) => {
  const { content, timestamp, isOutgoing, deleteMessage, editMessage } = props;

  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const handleDeleteClick = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(true);
  };

  if (!isOutgoing) {
    return (
      <div className="messageBox incoming">
        <MessageContent
          content={content}
          timestamp={timestamp}
        />
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
        <MessageContent
          content={content}
          timestamp={timestamp}
        />
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
          editMessage={editMessage}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          confirmText="Delete Message"
          closeDeleteModal={() => setIsDeleteModalOpen(false)}
          deleteMethod={deleteMessage}
        />
      )}
    </>
  );
};

export default MessageBox;
