import type { ReactNode } from "react";

import "./Header.css";

type Props = {
  children?: ReactNode;
};

const Header = (props: Props) => {
  const { children } = props;

  return <div className="header">{children}</div>;
};

export default Header;
