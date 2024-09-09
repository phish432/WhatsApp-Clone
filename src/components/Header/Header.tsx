import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Header.css";

type Props = {
  activeConnection: Connection;
};

const Header = (props: Props) => {
  return (
    <div className="header">
      <ConnectionCard
        connection={props.activeConnection}
        onClick={() => {}}
        isActive={false}
      />
    </div>
  );
};

export default Header;
