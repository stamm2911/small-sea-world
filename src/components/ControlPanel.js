import { useGridContext } from "../utils/GridContext";
import Button from "./Button";

function ControlPanel() {
  const { addColumn, removeColumn, addRow, removeRow, islasTotalesState, landState } =
    useGridContext();

  return (
    <header>
      <section>
        <h1>Small Sea World</h1>
        <div className="btn-container">
          <Button action={removeRow} icon={"remove"} />
          <h2>Height</h2>
          <Button action={addRow} icon={"add"} />
          <Button action={removeColumn} icon={"remove"} />
          <h2>Width</h2>
          <Button action={addColumn} icon={"add"} />
        </div>
      </section>
      <aside>
        <h2><u>Data:</u></h2>
        <ul>
          <li>- Land Cells: {landState}</li>
          <li>- Total Islands: {islasTotalesState}</li>
        </ul>
      </aside>
    </header>
  );
}

export default ControlPanel;
