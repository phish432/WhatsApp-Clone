import { useEffect, useRef, useState } from "react";

import ActionButton from "../../ActionButton/ActionButton";
import Modal from "../Modal";

import "./NewChatModal.css";

type Props = {
  createChatMethod: (name: string) => void;
  onClose: () => void;
};

const NewChatModal = (props: Props) => {
  const { createChatMethod, onClose } = props;

  const [userName, setUserName] = useState<string>("");
  const editorRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const editor = editorRef.current;
    if (editor !== null) {
      editor.focus();
    }
  }, []);

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    if (userName.trim() !== "") {
      createChatMethod(userName);
      onClose();
    }
  };

  return (
    <div className="newChatModal">
      <Modal
        selector="newChat"
        onClose={onClose}
        head="Create New Chat"
        body={
          <input
            ref={editorRef}
            type="text"
            name="chatName"
            className="chatName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter chat name"
          />
        }
        foot={
          <>
            <ActionButton onClick={handleCancel}>Cancel</ActionButton>
            <ActionButton onClick={handleConfirm}>Create</ActionButton>
          </>
        }
      />
    </div>
  );
};

export default NewChatModal;
