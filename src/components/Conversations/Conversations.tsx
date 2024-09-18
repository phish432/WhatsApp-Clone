import type { Connection, ConnectionWithPreview } from "../../types/types";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Conversations.css";

type Props = {
  activeConnection: Connection | null;
  previewList: ConnectionWithPreview[];
  setActiveConnection: (connection: Connection) => void;
  deleteConversation: (connection: Connection) => void;
};

const Conversations = (props: Props) => {
  const { activeConnection, previewList, setActiveConnection, deleteConversation } = props;

  return (
    <div className="conversations">
      {previewList.map((preview) => (
        <ConnectionCard
          key={preview.connection.id}
          preview={preview}
          isActive={preview.connection === activeConnection}
          onClick={() => setActiveConnection(preview.connection)}
          deleteConversation={() => deleteConversation(preview.connection)}
        />
      ))}
    </div>
  );
};

export default Conversations;
