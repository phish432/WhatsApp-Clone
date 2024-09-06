import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import "./App.css";

const App = () => {
  return (
    <div id="app">
      <SidePanel />
      <MainPanel />
    </div>
  );
};

export default App;
