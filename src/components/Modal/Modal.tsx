import { createPortal } from "react-dom";
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

  return createPortal(
    <div className="modal">
      <div className="modalContent">
        {children}
        <ActionButton onClick={onConfirm}>
          {confirmText || "Confirm"}
        </ActionButton>
        <ActionButton onClick={onCancel}>{cancelText || "Cancel"}</ActionButton>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
