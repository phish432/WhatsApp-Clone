import type { Dispatch, SetStateAction } from "react";

import { DEFAULT_CLIENT } from "../../constant";

import { memo } from "react";

import ActionButton from "../ActionButton/ActionButton";
import Avatar from "../Avatar/Avatar";
import Header from "../Header/Header";

type Props = {
  isSpacious: boolean;
  setIsSpacious: Dispatch<SetStateAction<boolean>>;
};

const SidePanelHeader = (props: Props) => {
  const { isSpacious, setIsSpacious } = props;

  return (
    <>
      <Header>
        <Avatar
          src={DEFAULT_CLIENT.profileImg}
          alt={DEFAULT_CLIENT.name}
        />
        <ActionButton onClick={() => setIsSpacious((prev) => !prev)}>
          {isSpacious ? "Spacious" : "Compact"} Mode
        </ActionButton>
      </Header>
    </>
  );
};

const MemoizedSidePanelHeader = memo(SidePanelHeader);

export default MemoizedSidePanelHeader;
