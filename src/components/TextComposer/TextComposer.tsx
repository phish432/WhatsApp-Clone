import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import MessageForm from "../MessageForm/MessageForm";
import "./TextComposer.css";

type Props = {
  activeConnection: Connection;
  setAllMessages: (messages: Message[]) => void;
};

const TextComposer = (props: Props) => {
  return (
    <div className="textComposer">
      <MessageForm />
    </div>
  );
};

export default TextComposer;
