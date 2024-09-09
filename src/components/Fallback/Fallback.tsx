import "./Fallback.css";

type Props = {
  children?: React.ReactNode;
};

const Fallback = (props: Props) => {
  return <span className="fallback">{props.children}</span>;
};

export default Fallback;
