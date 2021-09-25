import { useGridContext } from "../utils/GridContext";
import Button from "./Button";

function ControlPanel() {
  const { gridState, addColumn, removeColumn } = useGridContext();

  return (
    <header>
      <h1>Small Sea World</h1>
      <section>
        <Button action={removeColumn} icon={"arrow_upward"} />
        <h2>Height</h2>
        <Button action={addColumn} icon={"arrow_downward"} />
        <Button action={removeColumn} icon={"arrow_backward"} />
        <h2>Width</h2>
        <Button action={addColumn} icon={"arrow_forward"} />
        {/* <Button action={''} icon={'arrow_forward'}/>
      <Button action={''} icon={'arrow_forward'}/> */}
      </section>
    </header>
  );
}

export default ControlPanel;
