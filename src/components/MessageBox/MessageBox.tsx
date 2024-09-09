import "./MessageBox.css";

type Props = {
  isClient: boolean;
  content: string;
  time: Date;
};

const MessageBox = (props: Props) => {
  return (
    <div className={`messageBox${props.isClient ? " client" : ""}`}>
      <div className="messageBoxContent">{props.content}</div>
      <div className="messageBoxTime">
        {props.time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
};
export default MessageBox;
