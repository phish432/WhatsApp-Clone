import { Connection } from "../../constant/connections";
import Conversations from "../Conversations/Conversations";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
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
      <Header
        connection={allConnections.find((c) => c.id === "user_id_0")!}
        showUserInfo={false}
      />
      <SearchBar />
      <Conversations
        activeConnection={activeConnection}
        setActiveConnection={setActiveConnection}
        allConnections={allConnections.filter((c) => c.id !== "user_id_0")}
      />
    </div>
  );
};

export default SidePanel;
