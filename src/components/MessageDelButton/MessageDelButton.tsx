import "./MessageDelButton.css";

type Props = {
  onClick: () => void;
};

const MessageDelButton = (props: Props) => {
  return (
    <div className="messageDelButton" onClick={props.onClick}>
      Delete
    </div>
  );
};

export default MessageDelButton;
