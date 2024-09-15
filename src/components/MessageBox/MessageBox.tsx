import { Message } from "../../constant/defaultMessages";
import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import MessageContent from "../MessageContent/MessageContent";
import EditModal from "../EditModal/EditModal";
import "./MessageBox.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
  onDelete: (message: Message) => void;
  onEdit: (message: Message, newContent: string) => void;
};

const MessageBox = (props: Props) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const { message, isOutgoing, onDelete, onEdit } = props;

  const handleDeleteClick = () => {
    onDelete(message);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  return isOutgoing ? (
    <>
      <div className="messageBox outgoing">
        <MessageContent message={message} />
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
          onClose={handleEditModalClose}
          message={message}
          onEdit={onEdit}
        />
      )}
    </>
  ) : (
    <div className="messageBox incoming">
      <MessageContent message={message} />
    </div>
  );
};
export default MessageBox;
