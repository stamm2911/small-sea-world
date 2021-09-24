import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import sea from "../img/sea.jpg";

function Grid() {
  //   const matrix = [
  //     [false, false, false],
  //     [false, true, false],
  //     [false, false, false],
  //   ];

  const [gridState, setGridState] = useState([
    [false, false, false],
    [false, true, false],
    [false, false, false],
  ]);

  console.log(gridState);
  function matrixGenerator(cols, rows) {
    const arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

  function addColumn() {
    const matrix = [...gridState];
    // console.log(matrix);
    matrix.forEach((item) => {
      item.push(false);
    });
    setGridState(matrix)
  }

  //   const matrix = matrixGenerator(3,3)
  //   console.log(matrix.length)

  const toggle = (item2) => {
    console.log(item2);
  };

  return (
    <table>
      <tbody>
        {gridState.map((item) => {
          return (
            <tr key={uuidv4()}>
              {item.map((item2) => {
                return (
                  <td key={uuidv4()} onClick={addColumn}>
                    {item2 ? "" : <img src={sea} alt="pic" />}
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
  );
}

export default Grid;
