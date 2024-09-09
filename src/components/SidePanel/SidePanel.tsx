import { Connection } from "../../constant/connections";
import Conversations from "../Conversations/Conversations";
import "./SidePanel.css";

type Props = {
  connections: Connection[];
  activeConnId: string | null;
  setActiveConnId: (id: string) => void;
};

const SidePanel = (props: Props) => {
  return (
    <div className="sidePanel">
      <Conversations
        connections={props.connections}
        activeConnId={props.activeConnId}
        setActiveConnId={props.setActiveConnId}
      />
    </div>
  );
};

export default SidePanel;
