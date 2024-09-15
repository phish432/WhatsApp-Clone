import Modal from "../Modal/Modal";
import "./DeleteModal.css";

type Props = {
  closeDeleteModal: () => void;
  deleteMessage: () => void;
  confirmText: string;
};

const DeleteModal = (props: Props) => {
  const { closeDeleteModal, deleteMessage, confirmText } = props;

  const handleCancel = () => {
    closeDeleteModal();
  };

  const handleConfirm = () => {
    deleteMessage();
    closeDeleteModal();
  };

  return (
    <Modal
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      confirmText={confirmText}
    >
      <div className="deleteMessage">Are you sure you want to delete?</div>
    </Modal>
  );
};

export default DeleteModal;
