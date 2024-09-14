import React from "react";
import "./DeleteButton.css";

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
};

const DeleteButton = (props: Props) => {
  const { onClick, children } = props;

  return (
    <div className="deleteButton" onClick={onClick}>
      {children}
    </div>
  );
};

export default DeleteButton;
