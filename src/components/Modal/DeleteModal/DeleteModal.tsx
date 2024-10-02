import ActionButton from "../../ActionButton/ActionButton";
import Modal from "../Modal";

import "./DeleteModal.css";

type Props = {
  title: string;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteModal = (props: Props) => {
  const { title, onClose, onDelete } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    onDelete();
    onClose();
  };

  return (
    <Modal
      selector="delete"
      onClose={onClose}
      head={title}
      foot={
        <>
          <ActionButton onClick={handleCancel}>Cancel</ActionButton>
          <ActionButton onClick={handleConfirm}>Delete</ActionButton>
        </>
      }
    />
  );
};

export default DeleteModal;
