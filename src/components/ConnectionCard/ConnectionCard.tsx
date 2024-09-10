import { Connection } from "../../constant/connections";
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import "./ConnectionCard.css";

type Props = {
  connection: Connection;
  onClick: (connection: Connection) => void;
  isActive: boolean;
  showUserInfo: boolean;
};

const ConnectionCard = (props: Props) => {
  const { connection, onClick, isActive, showUserInfo } = props;

  const handleClick = () => {
    onClick(connection);
  };

  return (
    <div
      className={`connectionCard${isActive ? " active" : ""}`}
      onClick={handleClick}
    >
      <Avatar src={connection.profileImg} alt={connection.name} />
      {showUserInfo && <UserInfo name={connection.name} />}
    </div>
  );
};

export default ConnectionCard;
