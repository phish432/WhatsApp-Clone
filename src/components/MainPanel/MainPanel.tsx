import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import Fallback from "../Fallback/Fallback";
import Header from "../Header/Header";
import ChatArea from "../ChatArea/ChatArea";
import TextComposer from "../TextComposer/TextComposer";
import "./MainPanel.css";

function isMessageFromAToB(
  msg: Message,
  userA: string | null,
  userB: string | null,
) {
  return msg.fromConnId === userA && msg.toConnId === userB;
}

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

  let otherUser = props.activeConnection.id;
  let client = null;
  let activeMessages = props.allMessages.filter(
    (msg) =>
      isMessageFromAToB(msg, otherUser, client) ||
      isMessageFromAToB(msg, client, otherUser),
  );
  activeMessages.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  return (
    <div className="mainPanel">
      <Header activeConnection={props.activeConnection} />
      <ChatArea
        activeConnection={props.activeConnection}
        activeMessages={activeMessages}
        setAllMessages={props.setAllMessages}
      />
      <TextComposer
        activeConnection={props.activeConnection}
        setAllMessages={props.setAllMessages}
      />
    </div>
  );
};

export default MainPanel;
