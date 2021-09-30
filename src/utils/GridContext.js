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
  // useEffect(islandCount, [gridState]);

  function islandCount(cellValue, rowIndex, coloumnIndex, land) {
    const matrix = [...gridState];
    const neighbourCellsArray = []
    // console.log('cellValue',cellValue)
    if (!cellValue) {
      console.log("hey", matrix);
      if(matrix[rowIndex][coloumnIndex - 1] === false ){
        matrix[rowIndex][coloumnIndex] = land
      }else{
        neighbourCellsArray.push(matrix[rowIndex][coloumnIndex - 1] ? matrix[rowIndex][coloumnIndex - 1] : land)
        // console.log('neighbourCellsArray',neighbourCellsArray)
      }

      
    }
    setGridState(matrix);

    // if (columnCell) {
    //   if (
    //     matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] ===
    //       false &&
    //     matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex] === false
    //   ) {
    //     matrix[rowIndex][coloumnIndex] = islandTotalCount;
    //     islandTotalCount++;
    //   } else if (
    //     matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] &&
    //     coloumnIndex !== 0
    //   ) {
    //     matrix[rowIndex][coloumnIndex] =
    //       matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1];
    //   } else if (
    //     matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex] &&
    //     rowIndex !== 0
    //   ) {
    //     matrix[rowIndex][coloumnIndex] =
    //       matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex];
    //   } else {
    //     matrix[rowIndex][coloumnIndex] = islandTotalCount;
    //     islandTotalCount++;
    //   }

    //   if (
    //     matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] &&
    //     matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
    //   ) {
    //     matrix[rowIndex][coloumnIndex] =
    //       matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] <
    //       matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
    //         ? matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1]
    //         : matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex];

    //     if (
    //       matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] !==
    //       matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
    //     ) {
    //       equivalency.push([
    //         matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] >
    //         matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
    //           ? matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1]
    //           : matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex],
    //         matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] <
    //         matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
    //           ? matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1]
    //           : matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex],
    //       ]);
    //     }
    //   }
    // }
  }

  function toggled(cellValue, rowIndex, coloumnIndex) {
    const matrix = [...gridState];
    matrix[rowIndex][coloumnIndex] = !cellValue;
    let land = landState;
    cellValue ? land-- : land++;
    setlandState(land);
    islandCount(cellValue, rowIndex, coloumnIndex, land);
    // setGridState(matrix);
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
      value={{
        gridState,
        addColumn,
        removeColumn,
        addRow,
        removeRow,
        toggled,
        islasTotalesState,
        landState,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};
