import { Connection } from "../../constant/connections";
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import "./ConnectionCard.css";

type Props = {
  connection: Connection;
  onClick: () => void;
  isActive: boolean;
};

const ConnectionCard = (props: Props) => {
  let activeClass = props.isActive ? " active" : "";
  return (
    <div className={`connectionCard${activeClass}`} onClick={props.onClick}>
      <Avatar src={props.connection.profileImg} alt={props.connection.name} />
      <UserInfo name={props.connection.name} />
    </div>
  );
};

export default ConnectionCard;
