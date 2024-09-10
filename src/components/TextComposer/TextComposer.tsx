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
  const { activeConnection, allMessages, setAllMessages } = props;

  return (
    <div className="textComposer">
      <MessageForm
        activeConnection={activeConnection}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
    </div>
  );
};

export default TextComposer;
