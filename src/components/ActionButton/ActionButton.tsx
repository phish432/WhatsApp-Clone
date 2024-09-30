import type { ReactNode } from "react";

import "./ActionButton.css";

type Props = {
  onClick: () => void;
  children?: ReactNode;
};

const ActionButton = (props: Props) => {
  const { onClick, children } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
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
