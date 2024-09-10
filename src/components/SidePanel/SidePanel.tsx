import { Connection } from "../../constant/connections";
import { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { activeConnection, setActiveConnection, allConnections } = props;

  return (
    <div className="sidePanel">
      <Header
        connection={allConnections.find((c) => c.id === "user_id_0")!}
        showUserInfo={false}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Conversations
        activeConnection={activeConnection}
        setActiveConnection={setActiveConnection}
        allConnections={allConnections
          .filter((c) => c.id !== "user_id_0")
          .filter((c) =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )}
      />
    </div>
  );
};

export default SidePanel;
