import { Message } from "../../constant/defaultMessages";
import { useState, useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./EditModal.css";

type Props = {
  closeEditModal: () => void;
  message: Message;
  editMessage: (message: Message, newContent: string) => void;
};

const EditModal = (props: Props) => {
  const { closeEditModal, message, editMessage } = props;

  const [newContent, setNewContent] = useState<string>(message.content);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const editor = editorRef.current;
    if (editor !== null) {
      editor.focus();
      editor.scrollTo(0, editor.scrollHeight);
      editor.setSelectionRange(editor.value.length, editor.value.length);
    }
  }, []);

  const handleCancel = () => {
    closeEditModal();
  };

  const handleConfirm = () => {
    if (newContent !== "") {
      editMessage(message, newContent);
      closeEditModal();
    }
  };

  return (
    <Modal onCancel={handleCancel} onConfirm={handleConfirm} confirmText="Save">
      <textarea
        ref={editorRef}
        className="editor"
        value={newContent}
        placeholder="Type a message"
        onChange={(e) => setNewContent(e.target.value)}
      />
    </Modal>
  );
};

export default EditModal;
