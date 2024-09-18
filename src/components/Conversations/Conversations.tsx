import { Connection, ConnectionWithPreview } from "../../types/types";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Conversations.css";

type Props = {
  activeConnection: Connection | null;
  setActiveConnection: (connect: Connection) => void;
  previewList: ConnectionWithPreview[];
  deleteConversation: (connection: Connection) => void;
};

const Conversations = (props: Props) => {
  const {
    activeConnection,
    setActiveConnection,
    previewList,
    deleteConversation,
  } = props;

  return (
    <div className="conversations">
      {previewList.map((preview) => (
        <ConnectionCard
          key={preview.connection.id}
          preview={preview}
          onClick={() => setActiveConnection(preview.connection)}
          isActive={preview.connection === activeConnection}
          deleteConversation={() => deleteConversation(preview.connection)}
        />
      ))}
    </div>
  );
};

export default Conversations;
