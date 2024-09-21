import ActiveUserProvider from "./contexts/ActiveUserProvider";
import MessagesProvider from "./contexts/MessagesProvider";
import UsersProvider from "./contexts/UsersProvider";
import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import "./App.css";

const App = () => {
  return (
    <div id="app">
      <ActiveUserProvider>
        <MessagesProvider>
          <UsersProvider>
            <SidePanel />
            <MainPanel />
          </UsersProvider>
        </MessagesProvider>
      </ActiveUserProvider>
    </div>
  );
};

export default App;
