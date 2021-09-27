import React, { createContext, useContext, useEffect, useState } from "react";

const GridContext = createContext();

export const useGridContext = () => useContext(GridContext);

export const GridProvider = ({ children }) => {
  const [gridState, setGridState] = useState([
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ]);
  const [islasTotalesState, setIslasTotalesState] = useState(0);
  const [landState, setlandState] = useState(0);
  var islandTotalCount = 1;
  useEffect(islandCount, [gridState, islandTotalCount]);

  function islandCount() {
    let equivalency = [];
    let islasTotalesState2 = [];
    const matrix = [...gridState];
    matrix.forEach((rowCell, rowIndex) => {
      return rowCell.forEach((columnCell, coloumnIndex) => {
        if (columnCell) {
          if (
            matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] ===
              false &&
            matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex] === false
          ) {
            // console.log("in0");
            matrix[rowIndex][coloumnIndex] = islandTotalCount;
            islandTotalCount++;
          } else if (
            matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] &&
            coloumnIndex !== 0
          ) {
            // console.log("in1");
            matrix[rowIndex][coloumnIndex] =
              matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1];
          } else if (
            matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex] &&
            rowIndex !== 0
          ) {
            // console.log("in2");
            matrix[rowIndex][coloumnIndex] =
              matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex];
          } else {
            // console.log("in3");
            matrix[rowIndex][coloumnIndex] = islandTotalCount;
            islandTotalCount++;
          }

          if (
            matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] &&
            matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
          ) {
            matrix[rowIndex][coloumnIndex] =
              matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] <
              matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
                ? matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1]
                : matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex];
            // islandTotalCount --

            if (
              matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] !==
              matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
            ) {
              equivalency.push([
                matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] >
                matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
                  ? matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1]
                  : matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex],
                matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] <
                matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
                  ? matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1]
                  : matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex],
              ]);
            }
          }
        }
      });
    });
    // console.log(matrix);
    equivalency = equivalency.reverse();
    matrix.forEach((rowCell, rowIndex) => {
      return rowCell.forEach((columnCell, coloumnIndex) => {
        for (let i = 0; i < equivalency.length; i++) {
          if (matrix[rowIndex][coloumnIndex] === equivalency[i][0]) {
            console.log("eq:", equivalency);
            console.log(
              `matrix[${rowIndex}][${coloumnIndex}]=${columnCell}`,
              equivalency[i]
            );
            matrix[rowIndex][coloumnIndex] = equivalency[i][1];
            console.log(
              `matrix[${rowIndex}][${coloumnIndex}]=${matrix[rowIndex][coloumnIndex]}`
            );
          }
        }
      });
    });
    console.log(matrix);
    matrix.forEach((row) => {
      return row.forEach((cell) => {
        if (cell) islasTotalesState2.push(cell);
      });
    });
    const uniq = [...new Set(islasTotalesState2)];
    console.log("islasTotalesState2", uniq);
    console.log('islandiassssss',uniq.length)
    // console.log(equivalency);
    // console.log(islandTotalCount - 1);
    setIslasTotalesState(uniq.length)
  }

  function toggled(cellValue, rowIndex, coloumnIndex) {
    const matrix = [...gridState];
    let land = landState
    cellValue? land-- : land++
    setlandState(land) 
    matrix[rowIndex][coloumnIndex] = !matrix[rowIndex][coloumnIndex];
    setGridState(matrix);
  }

  function addColumn() {
    const matrix = [...gridState];
    matrix.forEach((columnCell) => {
      columnCell.push(false);
    });
    setGridState(matrix);
  }

  function removeColumn() {
    const matrix = [...gridState];
    if (matrix[0].length > 1) {
      matrix.forEach((columnCell) => {
        columnCell.pop();
      });
      setGridState(matrix);
    }
  }

  function addRow() {
    const matrix = [...gridState];
    matrix.push(
      matrix[0].map((rowCell) => {
        return false;
      })
    );
    setGridState(matrix);
  }

  function removeRow() {
    const matrix = [...gridState];
    if (matrix.length > 1) {
      matrix.pop();
      setGridState(matrix);
    }
  }

  return (
    <GridContext.Provider
      value={{ gridState, addColumn, removeColumn, addRow, removeRow, toggled, islasTotalesState, landState }}
    >
      {children}
    </GridContext.Provider>
  );
};
