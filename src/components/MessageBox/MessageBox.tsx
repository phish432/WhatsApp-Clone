import { Message } from "../../constant/defaultMessages";
import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import MessageContent from "../MessageContent/MessageContent";
import EditModal from "../EditModal/EditModal";
import "./MessageBox.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
  deleteMessage: (message: Message) => void;
  editMessage: (message: Message, newContent: string) => void;
};

const MessageBox = (props: Props) => {
  const { message, isOutgoing, deleteMessage, editMessage } = props;

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteClick = () => {
    deleteMessage(message);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
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
          closeEditModal={closeEditModal}
          message={message}
          editMessage={editMessage}
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
