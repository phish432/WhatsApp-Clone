import { ConnectionWithPreview } from "../../types/types";
import Avatar from "../Avatar/Avatar";
import Preview from "../Preview/Preview";
import "./ConnectionCard.css";

type Props = {
  preview: ConnectionWithPreview;
  onClick: () => void;
  isActive: boolean;
};

const ConnectionCard = (props: Props) => {
  const { preview, onClick, isActive } = props;
  const { name, profileImg } = preview.connection;

  return (
    <div
      className={`connectionCard${isActive ? " active" : ""}`}
      onClick={onClick}
    >
      <Avatar src={profileImg} alt={name} />
      <Preview preview={preview} />
    </div>
  );
};

export default ConnectionCard;
