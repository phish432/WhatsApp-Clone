import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

type Props = {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
  selector?: string;
  onClose: () => void;
};

const Modal = (props: Props) => {
  const { head, body, foot, selector, onClose } = props;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className={`modal${selector ? " " + selector : ""}`}
      onClick={onClose}
    >
      <div
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
      >
        {head && <div className="modalHead">{head}</div>}
        {body && <div className="modalBody">{body}</div>}
        {foot && <div className="modalFoot">{foot}</div>}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
