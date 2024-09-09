import { Connection } from "../../constant/connections";
import Conversations from "../Conversations/Conversations";
import "./SidePanel.css";

type Props = {
  allConnections: Connection[];
  activeConnection: Connection | null;
  setActiveConnection: (connect: Connection) => void;
};

const SidePanel = (props: Props) => {
  return (
    <div className="sidePanel">
      <Conversations
        allConnections={props.allConnections}
        activeConnection={props.activeConnection}
        setActiveConnection={props.setActiveConnection}
      />
    </div>
  );
};

export default SidePanel;
