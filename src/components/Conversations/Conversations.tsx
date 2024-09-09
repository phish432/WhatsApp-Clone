import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Conversations.css";

type Props = {
  allConnections: Connection[];
  activeConnection: Connection | null;
  setActiveConnection: (connect: Connection) => void;
};

const Conversations = (props: Props) => {
  return (
    <div className="conversations">
      {props.allConnections.map((connection) => (
        <ConnectionCard
          key={connection.id}
          connection={connection}
          onClick={() => props.setActiveConnection(connection)}
          isActive={connection === props.activeConnection}
        />
      ))}
    </div>
  );
};

export default Conversations;
