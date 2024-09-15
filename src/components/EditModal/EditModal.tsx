import { Message } from "../../constant/defaultMessages";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";
import "./EditModal.css";

type Props = {
  onClose: () => void;
  message: Message;
  onEdit: (message: Message, newContent: string) => void;
};

const EditModal = (props: Props) => {
  const { onClose, message: oldMessage, onEdit } = props;

  const [newContent, setNewContent] = useState<string>(oldMessage.content);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const editor = editorRef.current;
    if (editor !== null) {
      editor.focus();
      editor.scrollTo(0, editor.scrollHeight);
      editor.setSelectionRange(editor.value.length, editor.value.length);
    }
  }, []);

  const onCancel = () => {
    onClose();
  };

  const onConfirm = () => {
    if (newContent !== "") {
      onEdit(oldMessage, newContent);
      onClose();
    }
  };

  return createPortal(
    <>
      <Modal onCancel={onCancel} onConfirm={onConfirm}>
        <textarea
          ref={editorRef}
          className="editor"
          value={newContent}
          placeholder="Type a message"
          onChange={(e) => setNewContent(e.target.value)}
        />
      </Modal>
    </>,
    document.body,
  );
};

export default EditModal;
