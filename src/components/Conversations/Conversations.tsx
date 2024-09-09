import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Conversations.css";

type Props = {
  connections: Connection[];
  activeConnId: string | null;
  setActiveConnId: (id: string) => void;
};

const Conversations = (props: Props) => {
  return (
    <div className="conversations">
      {props.connections.map((connection) => (
        <ConnectionCard
          key={connection.id}
          connection={connection}
          onClick={() => props.setActiveConnId(connection.id)}
          isActive={connection.id === props.activeConnId}
        />
      ))}
    </div>
  );
};

export default Conversations;
