import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Header.css";

type Props = {
  activeConnection: Connection;
};

const Header = (props: Props) => {
  const { activeConnection } = props;

  return (
    <div className="header">
      <ConnectionCard
        connection={activeConnection}
        onClick={() => {}}
        isActive={false}
      />
    </div>
  );
};

export default Header;
