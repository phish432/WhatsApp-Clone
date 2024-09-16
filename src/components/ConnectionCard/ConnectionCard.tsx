import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import "./ConnectionCard.css";

type Props = {
  userName: string;
  profileImg: string;
  onClick: () => void;
  isActive: boolean;
};

const ConnectionCard = (props: Props) => {
  const { userName, profileImg, onClick, isActive } = props;

  return (
    <div
      className={`connectionCard${isActive ? " active" : ""}`}
      onClick={onClick}
    >
      <Avatar src={profileImg} alt={userName} />
      <UserInfo name={userName} />
    </div>
  );
};

export default ConnectionCard;
