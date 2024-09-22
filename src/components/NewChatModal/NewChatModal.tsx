import { useEffect, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import "./NewChatModal.css";

type Props = {
  closeChatModal: () => void;
  createChatMethod: (name: string) => void;
};

const NewChatModal = (props: Props) => {
  const { closeChatModal, createChatMethod } = props;

  const [userName, setUserName] = useState<string>("");
  const editorRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const editor = editorRef.current;
    if (editor !== null) {
      editor.focus();
    }
  }, []);

  const handleCancel = () => {
    closeChatModal();
  };

  const handleConfirm = () => {
    if (userName.trim() !== "") {
      createChatMethod(userName);
      closeChatModal();
    }
  };

  return (
    <Modal
      confirmText="Start New Chat"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    >
      <input
        ref={editorRef}
        name="nameEditor"
        className="nameEditor"
        type="text"
        placeholder="Type the name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </Modal>
  );
};

export default NewChatModal;
