import { Connection, ConnectionWithPreview } from "../../types/types";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Conversations.css";

type Props = {
  activeConnection: Connection | null;
  setActiveConnection: (connect: Connection) => void;
  previewList: ConnectionWithPreview[];
};

const Conversations = (props: Props) => {
  const { activeConnection, setActiveConnection, previewList } = props;

  return (
    <div className="conversations">
      {previewList.map((preview) => (
        <ConnectionCard
          key={preview.connection.id}
          preview={preview}
          onClick={() => setActiveConnection(preview.connection)}
          isActive={preview.connection === activeConnection}
        />
      ))}
    </div>
  );
};

export default Conversations;
