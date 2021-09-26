// import { useEffect, useMemo, useState } from "react";
import { useGridContext } from "../utils/GridContext";
import { v4 as uuidv4 } from "uuid";
import Cell from "./Cell";

function Grid() {
  const { gridState } = useGridContext();

  const matrixGenerator = () => {
    return gridState.map((rowCell, rowIndex) => {
      return (
        <tr key={uuidv4()}>
          {rowCell.map((columnCell, coloumnIndex) => {
            return (
              <td key={uuidv4()}>
              {/* {console.log(columnCell)} */}
                <Cell
                  columnCell={columnCell}
                  rowIndex={rowIndex}
                  coloumnIndex={coloumnIndex}
                />
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <main>
      <table>
        <tbody>{matrixGenerator()}</tbody>
      </table>
    </main>
  );
}

export default Grid;
