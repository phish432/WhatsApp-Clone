import type { ChangeEvent } from "react";

import { useEffect, useRef, useState } from "react";

import ActionButton from "../../ActionButton/ActionButton";
import Modal from "../Modal";

import "./EditModal.css";

type Props = {
  oldContent: string;
  onClose: () => void;
  onEdit: (newContent: string) => void;
};

const EditModal = (props: Props) => {
  const { oldContent, onClose, onEdit } = props;

  const editorRef = useRef<HTMLTextAreaElement>(null);
  const [newContent, setNewContent] = useState<string>(oldContent);

  useEffect(() => {
    const editor = editorRef.current;
    if (editor !== null) {
      editor.focus();
      editor.scrollTo(0, editor.scrollHeight);
      editor.setSelectionRange(editor.value.length, editor.value.length);
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(event.target.value);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    if (newContent.trim() !== "") {
      onEdit(newContent);
      onClose();
    }
  };

  return (
    <div className="editModal">
      <Modal
        selector="edit"
        onClose={onClose}
        head="Edit Message"
        body={
          <textarea
            ref={editorRef}
            name="contentEditor"
            className="contentEditor"
            value={newContent}
            onChange={handleChange}
          />
        }
        foot={
          <>
            <ActionButton onClick={handleCancel}>Cancel</ActionButton>
            <ActionButton onClick={handleConfirm}>Save</ActionButton>
          </>
        }
      />
    </div>
  );
};

export default EditModal;
