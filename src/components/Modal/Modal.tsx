import React from "react";
import { createPortal } from "react-dom";
import ActionButton from "../ActionButton/ActionButton";
import "./Modal.css";

type Props = {
  cancelText?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
  children?: React.ReactNode;
};

const Modal = (props: Props) => {
  const { cancelText, confirmText, onCancel, onConfirm, children } = props;

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
