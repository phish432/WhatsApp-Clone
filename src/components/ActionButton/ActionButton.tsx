import React from "react";
import "./ActionButton.css";

type Props = {
  onClick: () => void;
  appendClass: "edit" | "delete";
  children?: React.ReactNode;
};

const ActionButton = (props: Props) => {
  const { onClick, appendClass, children } = props;

  return (
    <div className={`actionButton ${appendClass}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default ActionButton;
