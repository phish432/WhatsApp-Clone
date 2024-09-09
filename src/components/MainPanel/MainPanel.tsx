import { Connection } from "../../constant/connections";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import "./MainPanel.css";

type Props = {
  activeConnection: Connection | undefined;
};

const MainPanel = (props: Props) => {
  if (props.activeConnection === undefined) {
    return <div className="mainPanel">Select a connection</div>;
  } else {
    return (
      <div className="mainPanel">
        <ConnectionCard
          connection={props.activeConnection}
          onClick={() => {}}
          isActive={true}
        />
      </div>
    );
  }
};

export default MainPanel;
