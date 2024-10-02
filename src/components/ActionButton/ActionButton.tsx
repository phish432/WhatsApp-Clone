import type { MouseEvent, ReactNode } from "react";

import "./ActionButton.css";

type Props = {
  onClick: () => void;
  children?: ReactNode;
};

const ActionButton = (props: Props) => {
  const { onClick, children } = props;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
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
