import "./PreviewMessage.css";

type Props = {
  sender: string | null;
  content: string | null;
};

const PreviewMessage = (props: Props) => {
  const { sender, content } = props;

  if (content === null) {
    return <div className="previewMessage">No Message Yet</div>;
  }

  return (
    <div className="previewMessage">
      {sender}: {content}
    </div>
  );
};

export default PreviewMessage;
