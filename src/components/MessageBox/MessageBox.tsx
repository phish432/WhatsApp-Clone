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

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteClick = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(true);
  };

  return isOutgoing ? (
    <>
      <div className="messageBox outgoing">
        <MessageContent content={content} timestamp={timestamp} />
        <div className="hoverButtons">
          <ActionButton onClick={handleEditClick} appendClass="edit">
            Edit
          </ActionButton>
          <ActionButton onClick={handleDeleteClick} appendClass="delete">
            Delete
          </ActionButton>
        </div>
      </div>
      {isEditModalOpen && (
        <EditModal
          closeEditModal={closeEditModal}
          oldContent={content}
          editMessage={editMessage}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          closeDeleteModal={closeDeleteModal}
          deleteMessage={deleteMessage}
          confirmText="Delete Message"
        />
      )}
    </>
  ) : (
    <div className="messageBox incoming">
      <MessageContent content={content} timestamp={timestamp} />
    </div>
  );
};
export default MessageBox;
