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
import isMessageFromAToB from "../../utils/isMessageFromAToB";

type Props = {
  allConnections: Connection[];
  allMessages: Message[];
  activeConnection: Connection | null;
  setAllConnections: (connections: Connection[]) => void;
  setAllMessages: (messages: Message[]) => void;
  setActiveConnection: (connect: Connection) => void;
};

const SidePanel = (props: Props) => {
  const {
    allConnections,
    allMessages,
    activeConnection,
    setAllMessages,
    setActiveConnection,
    setAllConnections,
  } = props;

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

  const deleteConversation = (connection: Connection) => {
    const newMessages = allMessages.filter((message) => {
      return !(
        isMessageFromAToB(message, connection.id, clientConnection.id) ||
        isMessageFromAToB(message, clientConnection.id, connection.id)
      );
    });
    setAllMessages(newMessages);

    const newConnections = allConnections.filter((c) => c.id !== connection.id);
    setAllConnections(newConnections);
  };

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
        deleteConversation={deleteConversation}
      />
    </div>
  );
};

export default SidePanel;
