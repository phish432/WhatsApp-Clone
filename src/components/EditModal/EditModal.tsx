import { useState, useRef, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./EditModal.css";

type Props = {
  closeEditModal: () => void;
  oldContent: string;
  editMessage: (newContent: string) => void;
};

const EditModal = (props: Props) => {
  const { closeEditModal, oldContent, editMessage } = props;

  const [newContent, setNewContent] = useState<string>(oldContent);
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
    if (newContent.trim() !== "") {
      editMessage(newContent);
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
