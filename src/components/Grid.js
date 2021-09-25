import { useEffect, useMemo, useState } from "react";
import { useGridContext } from "../utils/GridContext";
import { v4 as uuidv4 } from "uuid";

import sea from "../img/sea-draw2.jpg";
import land from "../img/land.JPG";

function Grid() {
  //   const matrix = [
  //     [false, false, false],
  //     [false, true, false],
  //     [false, false, false],
  //   ];
  const { gridState, addColumn, removeColumn } = useGridContext();

  // const [gridState, setGridState] = useState([
  //   [false, false, false],
  //   [false, true, false],
  //   [false, false, false],
  // ]);

  console.log(gridState);
  function matrixGenerator(cols, rows) {
    const arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

  //   const matrix = matrixGenerator(3,3)
  //   console.log(matrix.length)

  const toggle = (item2) => {
    console.log(item2);
  };

  return (
    <main>
      {/* <button>&gt;</button> */}
      <table>
        <tbody>
          {gridState.map((rowCell) => {
            return (
              <tr key={uuidv4()}>
                {rowCell.map((columnCell) => {
                  return (
                    <td key={uuidv4()}>
                      {columnCell ? (
                        <img src={land} alt="pic" />
                      ) : (
                        <img src={sea} alt="pic" />
                      )}
                      {/* <img src={sea} alt="pic" /> */}
                      {/* {item2} */}
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
