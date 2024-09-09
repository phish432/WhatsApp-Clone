import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import MessageForm from "../MessageForm/MessageForm";
import "./TextComposer.css";

type Props = {
  activeConnection: Connection;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};

const TextComposer = (props: Props) => {
  return (
    <div className="textComposer">
      <MessageForm
        activeConnection={props.activeConnection}
        allMessages={props.allMessages}
        setAllMessages={props.setAllMessages}
      />
    </div>
  );
};

export default TextComposer;
