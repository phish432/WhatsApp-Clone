import "./Fallback.css";

type Props = {
  children?: React.ReactNode;
};

const Fallback = (props: Props) => {
  return <div className="fallback">{props.children}</div>;
};

export default Fallback;
