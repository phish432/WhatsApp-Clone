import "./UserInfo.css";

type Props = {
  name: string;
};

const UserInfo = (props: Props) => {
  const { name } = props;

  return (
    <div className="userInfo">
      <span className="userName">{name}</span>
    </div>
  );
};

export default UserInfo;
