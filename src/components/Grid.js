// import { useEffect, useMemo, useState } from "react";
import { useGridContext } from "../utils/GridContext";
import { v4 as uuidv4 } from "uuid";

import sea from "../img/sea-draw2.jpg";
import land from "../img/land.JPG";

function Grid() {
  const { gridState, toggled } = useGridContext();

  // function matrixGenerator(cols, rows) {
  //   const arr = new Array(cols);
  //   for (let i = 0; i < arr.length; i++) {
  //     arr[i] = new Array(rows);
  //   }
  //   return arr;
  // }

  return (
    <main>
      <table>
        <tbody>
          {gridState.map((rowCell, rowIndex) => {
            return (
              <tr key={uuidv4()}>
                {rowCell.map((columnCell, coloumnIndex) => {
                  return (
                    <td
                      key={uuidv4()}
                      onClick={() =>
                        toggled(columnCell, rowIndex, coloumnIndex)
                      }
                    >
                      {columnCell ? (
                        <img src={land} alt="pic" />
                      ) : (
                        <img src={sea} alt="pic" />
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default Grid;
