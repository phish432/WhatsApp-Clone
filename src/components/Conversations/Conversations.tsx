import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Conversations.css";

type Props = {
  activeConnection: Connection | null;
  setActiveConnection: (connect: Connection) => void;
  allConnections: Connection[];
};

const Conversations = (props: Props) => {
  const { activeConnection, setActiveConnection, allConnections } = props;

  const handleClick = (connection: Connection) => {
    setActiveConnection(connection);
  };

  return (
    <div className="conversations">
      {allConnections.map((connection) => (
        <ConnectionCard
          key={connection.id}
          connection={connection}
          onClick={handleClick}
          isActive={connection === activeConnection}
          showUserInfo={true}
        />
      ))}
    </div>
  );
};

export default Conversations;
