import DEFAULT_CLIENT from "../../constant/defaultClient";
import { useState } from "react";
import { useUsersContext } from "../../contexts/usersContext";
import Avatar from "../Avatar/Avatar";
import Conversations from "../Conversations/Conversations";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import searchUsersByName from "../../utils/searchUsersByName";
import "./SidePanel.css";

const SidePanel = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { users } = useUsersContext();

  const otherUsers = users.filter((user) => user.id !== DEFAULT_CLIENT.id);
  const searchUsers = searchUsersByName(otherUsers, searchTerm);

  return (
    <div className="sidePanel">
      <Header>
        <Avatar
          src={DEFAULT_CLIENT.profileImg}
          alt={DEFAULT_CLIENT.name}
        />
      </Header>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Conversations searchUsers={searchUsers} />
    </div>
  );
};

export default SidePanel;
