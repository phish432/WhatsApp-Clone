import type { User } from "../../types/types";

import Avatar from "../Avatar/Avatar";
import Header from "../Header/Header";

type Props = {
  activeUser: User;
};

const MainPanelHeader = (props: Props) => {
  const { activeUser } = props;

  return (
    <>
      <Header>
        <Avatar
          src={activeUser.profileImg}
          alt={activeUser.name}
        />
        <div className="activeName">{activeUser.name}</div>
      </Header>
    </>
  );
};

export default MainPanelHeader;
