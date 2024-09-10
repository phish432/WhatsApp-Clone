import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Header.css";

type Props = {
  activeConnection: Connection;
  showUserInfo: boolean;
};

const Header = (props: Props) => {
  const { activeConnection, showUserInfo } = props;

  return (
    <div className="header">
      <ConnectionCard
        connection={activeConnection}
        onClick={() => {}}
        isActive={false}
        showUserInfo={showUserInfo}
      />
    </div>
  );
};

export default Header;
