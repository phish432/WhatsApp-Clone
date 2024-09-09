import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import Fallback from "../Fallback/Fallback";
import Header from "../Header/Header";
import ChatArea from "../ChatArea/ChatArea";
import TextComposer from "../TextComposer/TextComposer";
import "./MainPanel.css";

type Props = {
  activeConnection: Connection | null;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};

const MainPanel = (props: Props) => {
  if (props.activeConnection === null) {
    return (
      <div className="mainPanel">
        <Fallback>Select a conversation to get started</Fallback>
      </div>
    );
  }

  return (
    <div className="mainPanel">
      <Header activeConnection={props.activeConnection} />
      <ChatArea
        activeConnection={props.activeConnection}
        allMessages={props.allMessages}
        setAllMessages={props.setAllMessages}
      />
      <TextComposer
        activeConnection={props.activeConnection}
        allMessages={props.allMessages}
        setAllMessages={props.setAllMessages}
      />
    </div>
  );
};

export default MainPanel;
