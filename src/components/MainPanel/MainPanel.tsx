import { Connection } from "../../constant/connections";
import Fallback from "../Fallback/Fallback";
import Header from "../Header/Header";
import ChatArea from "../ChatArea/ChatArea";
import TextComposer from "../TextComposer/TextComposer";
import "./MainPanel.css";

type Props = {
  activeConnection: Connection | undefined;
};

const MainPanel = (props: Props) => {
  if (props.activeConnection === undefined) {
    return (
      <div className="mainPanel">
        <Fallback />
      </div>
    );
  } else {
    return (
      <div className="mainPanel">
        <Header activeConnection={props.activeConnection} />
        <ChatArea />
        <TextComposer />
      </div>
    );
  }
};

export default MainPanel;
