import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import sea from "../img/sea-draw2.jpg";
import land from '../img/land.JPG'

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
    matrix.forEach((columnCell) => {
        columnCell.push(false);
    });
    setGridState(matrix);
  }

  function removeColumn () {
      const matrix = [...gridState];
      matrix.forEach(columnCell => {
        columnCell.pop()
      })
      setGridState(matrix)
  }

  //   const matrix = matrixGenerator(3,3)
  //   console.log(matrix.length)

  const toggle = (item2) => {
    console.log(item2);
  };

  return (
    <>
      {/* <button>&gt;</button> */}
      <button class="waves-effect waves-light btn" onClick={removeColumn}>
        <i class="material-icons left">cloud</i>&lt;
      </button>
      <button class="waves-effect waves-light btn" onClick={addColumn}>
        <i class="material-icons left">cloud</i>&gt;
      </button>

      <table>
        <tbody>
          {gridState.map((rowCell) => {
            return (
              <tr key={uuidv4()}>
                {rowCell.map((columnCell) => {
                  return (
                    <td key={uuidv4()}>
                      {columnCell ? <img src={land} alt="pic" /> : <img src={sea} alt="pic" />}
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
    </>
  );
}

export default Grid;
