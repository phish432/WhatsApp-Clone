import type { Dispatch, SetStateAction } from "react";

import { DEFAULT_CLIENT } from "../../constant";

import ActionButton from "../ActionButton/ActionButton";
import Avatar from "../Avatar/Avatar";
import Header from "../Header/Header";

type Props = {
  isSpacious: boolean;
  setIsSpacious: Dispatch<SetStateAction<boolean>>;
};

const SidePanelHeader = (props: Props) => {
  const { isSpacious, setIsSpacious } = props;

  const handleClick = () => {
    setIsSpacious((prev) => !prev);
  };

  return (
    <>
      <Header>
        <Avatar
          src={DEFAULT_CLIENT.profileImg}
          alt={DEFAULT_CLIENT.name}
        />
        <ActionButton onClick={handleClick}>
          {isSpacious ? "Spacious" : "Compact"} Mode
        </ActionButton>
      </Header>
    </>
  );
};

export default SidePanelHeader;
