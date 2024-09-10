import "./MessageDelButton.css";

type Props = {
  onClick: () => void;
};

const MessageDelButton = (props: Props) => {
  const { onClick } = props;

  return (
    <div className="messageDelButton" onClick={onClick}>
      Delete
    </div>
  );
};

export default MessageDelButton;
