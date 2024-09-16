import "./Header.css";

type Props = {
  children?: React.ReactNode;
};

const Header = (props: Props) => {
  const { children } = props;

  return <div className="header">{children}</div>;
};

export default Header;
