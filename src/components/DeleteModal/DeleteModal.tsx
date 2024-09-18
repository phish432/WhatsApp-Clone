import Modal from "../Modal/Modal";
import "./DeleteModal.css";

type Props = {
  confirmText: string;
  closeDeleteModal: () => void;
  deleteMessage: () => void;
};

const DeleteModal = (props: Props) => {
  const { confirmText, closeDeleteModal, deleteMessage } = props;

  const handleCancel = () => {
    closeDeleteModal();
  };

  const handleConfirm = () => {
    deleteMessage();
    closeDeleteModal();
  };

  return (
    <Modal
      confirmText={confirmText}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    >
      <div className="deleteMessage">Are you sure you want to delete?</div>
    </Modal>
  );
};

export default DeleteModal;
