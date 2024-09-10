import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import ChatArea from "../ChatArea/ChatArea";
import Fallback from "../Fallback/Fallback";
import Header from "../Header/Header";
import TextComposer from "../TextComposer/TextComposer";
import "./MainPanel.css";

type Props = {
  activeConnection: Connection | null;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};

const MainPanel = (props: Props) => {
  const { activeConnection, allMessages, setAllMessages } = props;

  if (activeConnection === null) {
    return (
      <div className="mainPanel">
        <Fallback>Select a conversation to get started</Fallback>
      </div>
    );
  }

  return (
    <div className="mainPanel">
      <Header activeConnection={activeConnection} showUserInfo={true} />
      <ChatArea
        activeConnection={activeConnection}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
      <TextComposer
        activeConnection={activeConnection}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
    </div>
  );
};

export default MainPanel;
