import React, { createContext, useContext, useState } from "react";

const GridContext = createContext();

export const useGridContext = () => useContext(GridContext);

export const GridProvider = ({ children }) => {
  const [gridState, setGridState] = useState([
    [false, false, false],
    [false, true, false],
    [false, false, false],
  ]);
  console.log(gridState);

  function toggled(cellValue, rowIndex, coloumnIndex) {
    const matrix = [...gridState];
    matrix[rowIndex][coloumnIndex] = !matrix[rowIndex][coloumnIndex];
    setGridState(matrix);
    // console.log(rowIndex);
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
      value={{ gridState, addColumn, removeColumn, addRow, removeRow, toggled }}
    >
      {children}
    </GridContext.Provider>
  );
};
