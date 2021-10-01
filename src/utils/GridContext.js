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
  const [landState, setlandState] = useState(0);
  const [islasTotalesState, setIslasTotalesState] = useState(0);
  const [splitIslandState, setSplitIslandState] = useState(101);
  const [totalIslandArrayState, setTotalIslandArrayState] = useState([]);

  function islandCount(cellValue, rowIndex, coloumnIndex, land) {
    let splitIsland = splitIslandState;
    const matrix = [...gridState];
    const totalIslandArray = [...totalIslandArrayState];
    const neighbourCellsArray = [];

    if (!cellValue) {
      if (
        !matrix[rowIndex][coloumnIndex - 1] &&
        !matrix[rowIndex - 1][coloumnIndex] &&
        !matrix[rowIndex][coloumnIndex + 1] &&
        !matrix[rowIndex + 1][coloumnIndex]
      ) {
        matrix[rowIndex][coloumnIndex] = land;
        totalIslandArray.push(land);
      } else {
        if (matrix[rowIndex][coloumnIndex - 1]) {
          neighbourCellsArray.push(matrix[rowIndex][coloumnIndex - 1]);
        }
        if (matrix[rowIndex - 1][coloumnIndex]) {
          neighbourCellsArray.push(matrix[rowIndex - 1][coloumnIndex]);
        }
        if (matrix[rowIndex][coloumnIndex + 1]) {
          neighbourCellsArray.push(matrix[rowIndex][coloumnIndex + 1]);
        }
        if (matrix[rowIndex + 1][coloumnIndex]) {
          neighbourCellsArray.push(matrix[rowIndex + 1][coloumnIndex]);
        }
        var smallestNeighbour = Math.min(...neighbourCellsArray);

        matrix[rowIndex][coloumnIndex] = smallestNeighbour;

        if (
          matrix[rowIndex][coloumnIndex - 1] &&
          matrix[rowIndex][coloumnIndex - 1] !== smallestNeighbour
        ) {
          matrix[rowIndex][coloumnIndex - 1] = matrix[rowIndex][coloumnIndex];
          islandCount(false, rowIndex, coloumnIndex - 1, land);
        }
        if (
          matrix[rowIndex - 1][coloumnIndex] &&
          matrix[rowIndex - 1][coloumnIndex] !== smallestNeighbour
        ) {
          matrix[rowIndex - 1][coloumnIndex] = matrix[rowIndex][coloumnIndex];
          islandCount(false, rowIndex - 1, coloumnIndex, land);
        }
        if (
          matrix[rowIndex][coloumnIndex + 1] &&
          matrix[rowIndex][coloumnIndex + 1] !== smallestNeighbour
        ) {
          matrix[rowIndex][coloumnIndex + 1] = matrix[rowIndex][coloumnIndex];
          islandCount(false, rowIndex, coloumnIndex + 1, land);
        }
        if (
          matrix[rowIndex + 1][coloumnIndex] &&
          matrix[rowIndex + 1][coloumnIndex] !== smallestNeighbour
        ) {
          matrix[rowIndex + 1][coloumnIndex] = matrix[rowIndex][coloumnIndex];
          islandCount(false, rowIndex + 1, coloumnIndex, land);
        }
      }
      if (
        !neighbourCellsArray.every((item) => {
          return item === neighbourCellsArray[0];
        })
      ) {
        const neighbourCellsArrayFiltered = neighbourCellsArray.filter(
          (item) => {
            return item !== smallestNeighbour;
          }
        );

        const totalIslandArrayFiltered =
          totalIslandArray.length > 1
            ? totalIslandArray.filter(
                (item) => !neighbourCellsArrayFiltered.includes(item)
              )
            : totalIslandArray;

        setTotalIslandArrayState(totalIslandArrayFiltered);
        setIslasTotalesState(totalIslandArrayFiltered.length);
      } else {
        setTotalIslandArrayState(totalIslandArray);
        setIslasTotalesState(totalIslandArray.length);
      }
    } else {
      if (
        !matrix[rowIndex][coloumnIndex - 1] &&
        !matrix[rowIndex - 1][coloumnIndex] &&
        !matrix[rowIndex][coloumnIndex + 1] &&
        !matrix[rowIndex + 1][coloumnIndex]
      ) {
        const index = totalIslandArray.indexOf(cellValue);
        totalIslandArray.splice(index, 1);
        setTotalIslandArrayState(totalIslandArray);
        setIslasTotalesState(totalIslandArray.length);
      } else {
        let splitIslandStateArr = splitIslandState;
        totalIslandArray.splice(
          totalIslandArray.indexOf(matrix[rowIndex][coloumnIndex]),
          1
        );

        if (matrix[rowIndex][coloumnIndex - 1]) {
          totalIslandArray.push(splitIslandStateArr);
          convertCells(matrix, rowIndex, coloumnIndex - 1, splitIslandStateArr);
        }

        splitIslandStateArr++;

        if (
          matrix[rowIndex - 1][coloumnIndex] &&
          matrix[rowIndex - 1][coloumnIndex] !==
            matrix[rowIndex][coloumnIndex - 1]
        ) {
          console.log("102", splitIslandStateArr);
          totalIslandArray.push(splitIslandStateArr);
          convertCells(matrix, rowIndex - 1, coloumnIndex, splitIslandStateArr);
        }

        splitIslandStateArr++;

        if (
          matrix[rowIndex][coloumnIndex + 1] &&
          matrix[rowIndex][coloumnIndex + 1] !==
            matrix[rowIndex][coloumnIndex - 1] &&
          matrix[rowIndex][coloumnIndex + 1] !==
            matrix[rowIndex - 1][coloumnIndex]
        ) {
          totalIslandArray.push(splitIslandStateArr);
          convertCells(matrix, rowIndex, coloumnIndex + 1, splitIslandStateArr);
        }

        splitIslandStateArr++;

        if (
          matrix[rowIndex + 1][coloumnIndex] &&
          matrix[rowIndex + 1][coloumnIndex] !==
            matrix[rowIndex][coloumnIndex - 1] &&
          matrix[rowIndex + 1][coloumnIndex] !==
            matrix[rowIndex - 1][coloumnIndex] &&
          matrix[rowIndex + 1][coloumnIndex] !==
            matrix[rowIndex][coloumnIndex + 1]
        ) {
          totalIslandArray.push(splitIslandStateArr);
          convertCells(matrix, rowIndex + 1, coloumnIndex, splitIslandStateArr);
        }

        splitIslandStateArr++;
        setTotalIslandArrayState(totalIslandArray);
        setIslasTotalesState(totalIslandArray.length);
        setSplitIslandState(splitIslandStateArr);
      }
    }
    setGridState(matrix);
    return;
  }

  function convertCells(matrix, rowIndex, coloumnIndex, splitIslandStateArr) {
    matrix[rowIndex][coloumnIndex] = splitIslandStateArr;

    if (
      matrix[rowIndex][coloumnIndex - 1] &&
      matrix[rowIndex][coloumnIndex - 1] !== splitIslandStateArr
    ) {
      matrix[rowIndex][coloumnIndex - 1] = matrix[rowIndex][coloumnIndex];
      convertCells(matrix, rowIndex, coloumnIndex - 1, splitIslandStateArr);
    }

    if (
      matrix[rowIndex - 1][coloumnIndex] &&
      matrix[rowIndex - 1][coloumnIndex] !== splitIslandStateArr
    ) {
      matrix[rowIndex - 1][coloumnIndex] = matrix[rowIndex][coloumnIndex];
      convertCells(matrix, rowIndex - 1, coloumnIndex, splitIslandStateArr);
    }

    if (
      matrix[rowIndex][coloumnIndex + 1] &&
      matrix[rowIndex][coloumnIndex + 1] !== splitIslandStateArr
    ) {
      matrix[rowIndex][coloumnIndex + 1] = matrix[rowIndex][coloumnIndex];
      convertCells(matrix, rowIndex, coloumnIndex + 1, splitIslandStateArr);
    }

    if (
      matrix[rowIndex + 1][coloumnIndex] &&
      matrix[rowIndex + 1][coloumnIndex] !== splitIslandStateArr
    ) {
      matrix[rowIndex + 1][coloumnIndex] = matrix[rowIndex][coloumnIndex];
      convertCells(matrix, rowIndex + 1, coloumnIndex, splitIslandStateArr);
    }
  }

  function toggled(cellValue, rowIndex, coloumnIndex) {
    const matrix = [...gridState];
    matrix[rowIndex][coloumnIndex] = !cellValue;
    let land = landState;
    cellValue ? land-- : land++;
    setlandState(land);
    islandCount(cellValue, rowIndex, coloumnIndex, land);
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
    if (matrix.length > 3) {
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
