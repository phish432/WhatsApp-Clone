import React from "react";
import "./ActionButton.css";

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
};

const ActionButton = (props: Props) => {
  const { onClick, children } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className="actionButton"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ActionButton;
