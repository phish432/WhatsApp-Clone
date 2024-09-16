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

  return (
    <div className="conversations">
      {allConnections.map((connection) => (
        <ConnectionCard
          key={connection.id}
          userName={connection.name}
          profileImg={connection.profileImg}
          onClick={() => setActiveConnection(connection)}
          isActive={connection === activeConnection}
        />
      ))}
    </div>
  );
};

export default Conversations;
