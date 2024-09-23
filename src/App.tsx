import ActiveUserProvider from "./contexts/ActiveUserProvider";
import DensityProvider from "./contexts/DensityProvider";
import MessagesProvider from "./contexts/MessagesProvider";
import UsersProvider from "./contexts/UsersProvider";
import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import "./App.css";

const App = () => {
  return (
    <div id="app">
      <ActiveUserProvider>
        <DensityProvider>
          <MessagesProvider>
            <UsersProvider>
              <SidePanel />
              <MainPanel />
            </UsersProvider>
          </MessagesProvider>
        </DensityProvider>
      </ActiveUserProvider>
    </div>
  );
};

export default App;
