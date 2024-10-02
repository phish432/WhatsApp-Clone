import type { User } from "../../types/types";

import { memo } from "react";

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

const MemoizedMainPanelHeader = memo(MainPanelHeader);

export default MemoizedMainPanelHeader;
