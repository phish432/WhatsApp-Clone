import CONNECTIONS from "../../constant/connections";
import Conversations from "../Conversations/Conversations";
import "./SidePanel.css";

const SidePanel = () => {
  return (
    <div className="sidePanel">
      <Conversations connections={CONNECTIONS} />
    </div>
  );
};

export default SidePanel;
