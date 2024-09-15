import ActionButton from "../ActionButton/ActionButton";
import "./Modal.css";

type Props = {
  onCancel: () => void;
  cancelText?: string;
  onConfirm: () => void;
  confirmText?: string;
  children?: React.ReactNode;
};

const Modal = (props: Props) => {
  const { onCancel, cancelText, onConfirm, confirmText, children } = props;
  return (
    <div className="modal">
      <div className="modalContent">
        {children}
        <ActionButton onClick={onConfirm} appendClass="confirm">
          {confirmText || "Confirm"}
        </ActionButton>
        <ActionButton onClick={onCancel} appendClass="cancel">
          {cancelText || "Cancel"}
        </ActionButton>
      </div>
    </div>
  );
};

export default Modal;
