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

  function addColumn() {
    const matrix = [...gridState];
    matrix.forEach((columnCell) => {
      columnCell.push(false);
    });
    setGridState(matrix);
  }

  function removeColumn() {
    const matrix = [...gridState];
    matrix.forEach((columnCell) => {
      columnCell.pop();
    });
    setGridState(matrix);
  }

  return (
    <GridContext.Provider value={{ gridState, addColumn, removeColumn }}>
      {children}
    </GridContext.Provider>
  );
};
