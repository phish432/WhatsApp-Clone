import { Connection } from "../../constant/connections";
import Conversations from "../Conversations/Conversations";
import "./SidePanel.css";

type Props = {
  activeConnection: Connection | null;
  setActiveConnection: (connect: Connection) => void;
  allConnections: Connection[];
};

const SidePanel = (props: Props) => {
  const { activeConnection, setActiveConnection, allConnections } = props;

  return (
    <div className="sidePanel">
      <Conversations
        activeConnection={activeConnection}
        setActiveConnection={setActiveConnection}
        allConnections={allConnections}
      />
    </div>
  );
};

export default SidePanel;
