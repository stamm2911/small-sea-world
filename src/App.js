import Grid from "./components/Grid";
import ControlPanel from "./components/ControlPanel";
import { GridProvider } from "./utils/GridContext";

function App() {
  return (
    <div>
      <GridProvider>
        <ControlPanel />
        <Grid />
      </GridProvider>
    </div>
  );
}

export default App;
