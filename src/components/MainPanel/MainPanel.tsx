import type { Dispatch } from "react";
import type { Message, MessageAction, User } from "../../types/types";

import { lazy } from "react";

import withSuspense from "../../hocs/withSuspense";

import Loading from "../Loading/Loading";
import MainPanelFallback from "./MainPanelFallback";
import MainPanelHeader from "./MainPanelHeader";

const MainPanelMain = lazy(() => import("./MainPanelMain"));
const LazyMainPanelMain = withSuspense(MainPanelMain, <Loading />);

import "./MainPanel.css";

type Props = {
  activeUser: User | null;
  isSpacious: boolean;
  messages: Message[];
  messagesDispatch: Dispatch<MessageAction>;
};

const MainPanel = (props: Props) => {
  const { activeUser, isSpacious, messages, messagesDispatch } = props;

  return (
    <div className="mainPanel">
      {activeUser === null ? (
        <MainPanelFallback />
      ) : (
        <>
          <MainPanelHeader activeUser={activeUser} />
          <LazyMainPanelMain
            activeUser={activeUser}
            isSpacious={isSpacious}
            messages={messages}
            messagesDispatch={messagesDispatch}
          />
        </>
      )}
    </div>
  );
};

export default MainPanel;
