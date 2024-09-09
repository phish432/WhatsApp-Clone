import { Connection } from "../../constant/connections";
import Fallback from "../Fallback/Fallback";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
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
