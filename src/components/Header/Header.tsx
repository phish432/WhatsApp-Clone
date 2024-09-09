import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Header.css";

type Props = {
  activeConnection: Connection;
};

const Header = (props: Props) => {
  return (
    <header className="header">
      <ConnectionCard
        connection={props.activeConnection}
        onClick={() => {}}
        isActive={false}
      />
    </header>
  );
};

export default Header;
