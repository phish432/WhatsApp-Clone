import "./PreviewBanner.css";

type Props = {
  connectionName: string;
  timestamp: Date | null;
};

const PreviewBanner = (props: Props) => {
  const { connectionName, timestamp } = props;

  return (
    <div className="previewBanner">
      <div className="previewName">{connectionName}</div>
      {timestamp !== null && (
        <div className="previewTime">
          {timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </div>
      )}
    </div>
  );
};

export default PreviewBanner;
