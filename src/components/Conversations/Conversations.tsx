import { useState } from "react";
import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./Conversations.css";

type Props = {
  connections: Connection[];
};

const Conversations = (props: Props) => {
  let [connectedCard, setConnectedCard] = useState<string | null>(null);

  return (
    <div className="conversations">
      {props.connections.map((connection) => (
        <ConnectionCard
          key={connection.id}
          connection={connection}
          onClick={() => setConnectedCard(connection.id)}
          isActive={connection.id === connectedCard}
        />
      ))}
    </div>
  );
};

export default Conversations;
