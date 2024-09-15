import React from "react";
import "./ActionButton.css";

type Props = {
  onClick: () => void;
  appendClass: string;
  children?: React.ReactNode;
};

const ActionButton = (props: Props) => {
  const { onClick, appendClass, children } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button className={`actionButton ${appendClass}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ActionButton;
