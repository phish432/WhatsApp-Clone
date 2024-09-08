import "./UserInfo.css";

type Props = {
  name: string;
};

const UserInfo = (props: Props) => {
  return (
    <div className="userInfo">
      <span className="userName">{props.name}</span>
    </div>
  );
};

export default UserInfo;
