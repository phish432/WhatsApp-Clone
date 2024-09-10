import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Header.css";

type Props = {
  connection: Connection;
  showUserInfo: boolean;
};

const Header = (props: Props) => {
  const { connection, showUserInfo } = props;

  return (
    <div className="header">
      <ConnectionCard
        connection={connection}
        onClick={() => {}}
        isActive={false}
        showUserInfo={showUserInfo}
      />
    </div>
  );
};

export default Header;
