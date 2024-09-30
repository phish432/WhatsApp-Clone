import type { ReactNode } from "react";

import "./Fallback.css";

type Props = {
  children?: ReactNode;
};

const Fallback = (props: Props) => {
  return <div className="fallback">{props.children}</div>;
};

export default Fallback;
