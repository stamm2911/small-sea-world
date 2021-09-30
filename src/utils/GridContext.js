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
  const [totalIslandArrayState, setTotalIslandArrayState] = useState([]);
  // var islandTotalCount = [];
  // useEffect(islandCount, [gridState]);
  console.log("totalIslandArray", totalIslandArrayState);

  function islandCount(cellValue, rowIndex, coloumnIndex, land) {
    console.log('##################33',rowIndex,coloumnIndex)
    const matrix = [...gridState];
    const totalIslandArray = [...totalIslandArrayState];
    const neighbourCellsArray = [];
    // console.log('cellValue',cellValue)
    if (!cellValue) {
      console.log("hey", matrix);
      if (
        matrix[rowIndex][coloumnIndex - 1] === false &&
        matrix[rowIndex - 1][coloumnIndex] === false &&
        matrix[rowIndex][coloumnIndex + 1] === false &&
        matrix[rowIndex + 1][coloumnIndex] === false
      ) {
        console.log("new land");
        matrix[rowIndex][coloumnIndex] = land;
        totalIslandArray.push(land);
      } else {
        console.log("in?");
        neighbourCellsArray.push(
          matrix[rowIndex][coloumnIndex - 1]
            ? matrix[rowIndex][coloumnIndex - 1]
            : Infinity,
          matrix[rowIndex - 1][coloumnIndex]
            ? matrix[rowIndex - 1][coloumnIndex]
            : Infinity,
          matrix[rowIndex][coloumnIndex + 1]
            ? matrix[rowIndex][coloumnIndex + 1]
            : Infinity,
          matrix[rowIndex + 1][coloumnIndex]
            ? matrix[rowIndex + 1][coloumnIndex]
            : Infinity
        );
        console.log("neighbourCellsArray", neighbourCellsArray);
        const smallestNeighbour = Math.min(...neighbourCellsArray);
        console.log("minVal", Math.min(...neighbourCellsArray));

        matrix[rowIndex][coloumnIndex] = smallestNeighbour;

        if(matrix[rowIndex][coloumnIndex - 1] && matrix[rowIndex][coloumnIndex - 1] !== smallestNeighbour){
          matrix[rowIndex][coloumnIndex - 1] = matrix[rowIndex][coloumnIndex]
          islandCount(false, rowIndex, coloumnIndex - 1, land)
        }
        if(matrix[rowIndex - 1][coloumnIndex] && matrix[rowIndex - 1][coloumnIndex] !== smallestNeighbour){
          matrix[rowIndex - 1][coloumnIndex] = matrix[rowIndex][coloumnIndex]
          islandCount(false, rowIndex - 1, coloumnIndex, land)
        }
        if(matrix[rowIndex][coloumnIndex + 1] && matrix[rowIndex][coloumnIndex + 1] !== smallestNeighbour){
          matrix[rowIndex][coloumnIndex + 1] = matrix[rowIndex][coloumnIndex]
          islandCount(false, rowIndex, coloumnIndex + 1, land)
        }
        if(matrix[rowIndex + 1][coloumnIndex] && matrix[rowIndex + 1][coloumnIndex] !== smallestNeighbour){
          matrix[rowIndex + 1][coloumnIndex] = matrix[rowIndex][coloumnIndex]
          islandCount(false, rowIndex + 1, coloumnIndex, land)
        }

        if (neighbourCellsArray.indexOf(smallestNeighbour) !== -1) {
          neighbourCellsArray.splice(
            neighbourCellsArray.indexOf(smallestNeighbour),
            1
          );
        }
      }
      console.log("neighb!!!!", neighbourCellsArray);
      console.log('totalIslandArrayb4',totalIslandArray)
     
      const totalIslandArrayFiltered = totalIslandArray.length > 1 ? totalIslandArray.filter(item => !neighbourCellsArray.includes(item)) : totalIslandArray

      console.log('totalIslandArrayAfter',totalIslandArrayFiltered)
      setTotalIslandArrayState(totalIslandArrayFiltered);
      setIslasTotalesState(totalIslandArrayFiltered.length)

    }
    setGridState(matrix);
    return
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
