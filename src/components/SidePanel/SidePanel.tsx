import type {
  Connection,
  ConnectionWithPreview,
  Message,
} from "../../types/types";
import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import Conversations from "../Conversations/Conversations";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import getConnectionsBySearch from "../../utils/getConnectionsBySearch";
import "./SidePanel.css";
import getLatestMessage from "../../utils/getLatestMessage";

type Props = {
  activeConnection: Connection | null;
  setActiveConnection: (connect: Connection) => void;
  allMessages: Message[];
  allConnections: Connection[];
};

const SidePanel = (props: Props) => {
  const { activeConnection, setActiveConnection, allMessages, allConnections } =
    props;

  const [searchTerm, setSearchTerm] = useState<string>("");

  const clientConnection = allConnections.find((c) => c.id === "user_id_0")!;
  const otherConnections = allConnections.filter((c) => c.id !== "user_id_0");

  const matchConnections = getConnectionsBySearch(otherConnections, searchTerm);
  const previewList = matchConnections
    .map(
      (connection) =>
        ({
          connection,
          latestMessage: getLatestMessage(connection, allMessages),
        }) as ConnectionWithPreview,
    )
    .sort((a, b) => {
      const x = a.latestMessage;
      const y = b.latestMessage;
      if (x !== null && y !== null) {
        return y.timestamp.getTime() - x.timestamp.getTime();
      }
      if (x === null && y === null) {
        return a.connection.name.localeCompare(b.connection.name);
      }
      if (x === null) {
        return 1;
      }
      return -1;
    });

  return (
    <div className="sidePanel">
      <Header>
        <Avatar src={clientConnection.profileImg} alt={clientConnection.name} />
      </Header>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Conversations
        activeConnection={activeConnection}
        setActiveConnection={setActiveConnection}
        previewList={previewList}
      />
    </div>
  );
};

export default SidePanel;
