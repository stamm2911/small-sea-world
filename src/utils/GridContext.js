import React, { createContext, useContext, useEffect, useState } from "react";

const GridContext = createContext();

export const useGridContext = () => useContext(GridContext);

export const GridProvider = ({ children }) => {
  // const [gridState, setGridState] = useState([
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, true, true, true, false, false, false, false, false, false],
  //   [false, true, true, true, false, false, false, false, false, false],
  //   [false, true, true, true, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, true, false, false, true, true, false],
  //   [false, false, false, false, true, false, false, true, true, false],
  //   [false, false, false, false, true, true, true, true, true, false],
  //   [false, true, true, true, true, true, true, true, true, false],
  //   [false, true, true, true, true, true, true, true, true, false],
  // ]);
  const [gridState, setGridState] = useState([
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ]);
  const [islandCountState, setIslandCountState] = useState(0);
  const [landCountState, setLandCountState] = useState(0);
  console.log(gridState);
  console.log("islandCountState22", islandCountState);
  //   useEffect(islandCount, [gridState, islandTotalCount]);

  //   function islandCount() {
  //     const equivalency = [];
  //     const matrix = [...gridState];
  //     matrix.forEach((rowCell, rowIndex) => {
  //       return rowCell.forEach((columnCell, coloumnIndex) => {
  //         if (columnCell) {
  //           if (
  //             matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] ===
  //               false &&
  //             matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex] === false
  //           ) {
  //             // console.log("in0");
  //             matrix[rowIndex][coloumnIndex] = islandTotalCount;
  //             islandTotalCount++;
  //           } else if (
  //             matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] &&
  //             coloumnIndex !== 0
  //           ) {
  //             // console.log("in1");
  //             matrix[rowIndex][coloumnIndex] =
  //               matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1];
  //           } else if (
  //             matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex] &&
  //             rowIndex !== 0
  //           ) {
  //             // console.log("in2");
  //             matrix[rowIndex][coloumnIndex] =
  //               matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex];
  //           } else {
  //             // console.log("in3");
  //             matrix[rowIndex][coloumnIndex] = islandTotalCount;
  //             islandTotalCount++;
  //           }

  //           if (
  //             matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] &&
  //             matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
  //           ) {
  //             matrix[rowIndex][coloumnIndex] =
  //               matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] <
  //               matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
  //                 ? matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1]
  //                 : matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex];
  //             // islandTotalCount --

  //             if (
  //               matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] !==
  //               matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
  //             ) {
  //               equivalency.push([
  //                 matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] >
  //                 matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
  //                   ? matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1]
  //                   : matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex],
  //                 matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1] <
  //                 matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex]
  //                   ? matrix[rowIndex][coloumnIndex === 0 ? 0 : coloumnIndex - 1]
  //                   : matrix[rowIndex === 0 ? 0 : rowIndex - 1][coloumnIndex],
  //               ]);
  //             }
  //           }
  //         }
  //       });
  //     });
  //     // console.log(matrix);
  //     matrix.forEach((rowCell, rowIndex) => {
  //       return rowCell.forEach((columnCell, coloumnIndex) => {
  //         for (let i = equivalency.length - 1; i >= 0; i--) {
  //           if (columnCell === equivalency[i][0]) {
  //             console.log('i',i,equivalency[i]);
  //             matrix[rowIndex][coloumnIndex] = equivalency[i][1];
  //           }
  //         }

  //         // equivalency.forEach((eq) => {
  //         //     if (columnCell === eq[0]) {
  //         //         matrix[rowIndex][coloumnIndex] = eq[1];
  //         //     }
  //         // });
  //       });
  //     });
  //     console.log(matrix);
  //     console.log(equivalency);
  //     console.log(islandTotalCount - 1);
  //   }

  function addIsland(cellValue, rowIndex, coloumnIndex) {
    let islandCount = islandCountState;
    let landCount = landCountState

    const c0 = gridState[rowIndex - 1][coloumnIndex - 1];
    const c1 = gridState[rowIndex - 1][coloumnIndex];
    const c2 = gridState[rowIndex - 1][coloumnIndex + 1];
    const c3 = gridState[rowIndex][coloumnIndex + 1];
    const c4 = gridState[rowIndex + 1][coloumnIndex + 1];
    const c5 = gridState[rowIndex +1 ][coloumnIndex];
    const c6 = gridState[rowIndex + 1][coloumnIndex - 1];
    const c7 = gridState[rowIndex][coloumnIndex - 1];
    
    console.log(c0);
    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log(c4);
    console.log(c5);
    console.log(c6);
    console.log(c7);

    // console.log('islandCountccc',islandCount)
    // console.log(
    //   `Above Cell[${rowIndex - 1}][${coloumnIndex}] = ${
    //     gridState[rowIndex - 1][coloumnIndex]
    //   }`,
    //   `Right Cell[${rowIndex}][${coloumnIndex + 1}] = ${
    //     gridState[rowIndex][coloumnIndex + 1]
    //   }`,
    //   `below Cell[${rowIndex + 1}][${coloumnIndex}] = ${
    //     gridState[rowIndex + 1][coloumnIndex]
    //   }`,
    //   `Llef Cell[${rowIndex}][${coloumnIndex - 1}] = ${
    //     gridState[rowIndex][coloumnIndex - 1]
    //   }`
    // );
    if (!cellValue) {
        landCount++
      if (
        !gridState[rowIndex - 1][coloumnIndex] &&
        !gridState[rowIndex][coloumnIndex + 1] &&
        !gridState[rowIndex + 1][coloumnIndex] &&
        !gridState[rowIndex][coloumnIndex - 1]
      ) {
        islandCount++;
        setIslandCountState(islandCount);
      } else if((!c0 && c1 && !c2 && c3 && !c4 && c5 && !c6 && c7)){
        islandCount = islandCount -3

      }else if (
        // (!c0 && !c1 && !c2 && !c3 && !c4 && !c5 && !c6 && !c7)
        (!c0 && c1 && !c2 && c3 && !c4 && !c5 && !c6 && c7) || 
        (!c0 && c1 && !c2 && c3 && !c4 && !c5 && c6 && c7) || 
        (!c0 && c1 && !c2 && c3 && c4 && !c5 && !c6 && c7) || 
        (!c0 && c1 && !c2 && c3 && c4 && !c5 && c6 && c7) || 


        (!c0 && !c1 && !c2 && c3 && !c4 && c5 && !c6 && c7) || 
        (!c0 && !c1 && c2 && c3 && !c4 && c5 && !c6 && c7) || 
        (c0 && !c1 && !c2 && c3 && !c4 && c5 && !c6 && c7) || 
        (c0 && !c1 && c2 && c3 && !c4 && c5 && !c6 && c7) || 


        (!c0 && c1 && !c2 && c3 && !c4 && c5 && !c6 && !c7) || 
        (c0 && c1 && !c2 && c3 && !c4 && c5 && !c6 && !c7) || 
        (!c0 && c1 && !c2 && c3 && !c4 && c5 && c6 && !c7) || 
        (c0 && c1 && !c2 && c3 && !c4 && c5 && c6 && !c7) || 


        (!c0 && c1 && !c2 && !c3 && !c4 && c5 && !c6 && c7) || 
        (!c0 && c1 && c2 && !c3 && !c4 && c5 && !c6 && c7) || 
        (!c0 && c1 && !c2 && !c3 && c4 && c5 && !c6 && c7) || 
        (!c0 && c1 && c2 && !c3 && c4 && c5 && !c6 && c7)
      ) {
        islandCount = islandCount -2
      } else if(
          (!c0 && c1 && !c2 && c3 && !c4 && !c5 && !c6 && !c7) ||
          (!c0 && c1 && !c2 && !c3 && !c4 && c5 && !c6 && !c7) ||
          (!c0 && c1 && !c2 && !c3 && !c4 && !c5 && !c6 && c7) ||
          (!c0 && c1 && !c2 && !c3 && !c4 && !c5 && !c6 && c7) ||
          (!c0 && !c1 && !c2 && c3 && !c4 && c5 && !c6 && !c7) ||
          (!c0 && !c1 && !c2 && c3 && !c4 && !c5 && !c6 && c7) ||
          (!c0 && !c1 && !c2 && !c3 && !c4 && c5 && !c6 && c7) ||
          (!c0 && !c1 && c2 && c3 && !c4 && c5 && !c6 && c7) ||
          (!c0 && c1 && !c2 && c3 && c4 && !c5 && !c6 && !c7) ||
          (!c0 && c1 && c2 && c3 && !c4 && c5 && c6 && c7) ||
          (c0 && !c1 && !c2 && !c3 && !c4 && c5 && !c6 && c7) ||
          (c0 && c1 && !c2 && c3 && !c4 && !c5 && !c6 && !c7) ||
          (!c0 && !c1 && !c2 && !c3 && !c4 && !c5 && !c6 && !c7) ||
          (!c0 && c1 && c2 && !c3 && !c4 && !c5 && !c6 && c7) ||
          (!c0 && c1 && c2 && c3 && c4 && !c5 && !c6 && c7) ||
          (c0 && c1 && !c2 && c3 && !c4 && !c5 && c6 && c7) ||
          (!c0 && c1 && c2 && c3 && !c4 && !c5 && !c6 && c7) ||
          (c0 && c1 && !c2 && c3 && !c4 && !c5 && !c6 && c7) ||
          (!c0 && !c1 && !c2 && c3 && c4 && c5 && !c6 && c7) ||
          (!c0 && !c1 && !c2 && c3 && !c4 && c5 && c6 && c7) ||
          (!c0 && !c1 && c2 && c3 && c4 && c5 && !c6 && c7) ||
          (c0 && !c1 && !c2 && c3 && !c4 && c5 && c6 && c7) ||
          (c0 && c1 && c2 && !c3 && c4 && c5 && c6 && !c7)||
          (c0 && !c1 && c2 && c3 && c4 && !c5 && c6 && c7)
      )
      
       
      {
        islandCount--
      }
    } else {
        landCount--
    }
    setLandCountState(landCount)
    setIslandCountState(islandCount);    
  }

  function toggled(cellValue, rowIndex, coloumnIndex) {
    addIsland(cellValue, rowIndex, coloumnIndex);
    const matrix = [...gridState];
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
      value={{ gridState, addColumn, removeColumn, addRow, removeRow, toggled, islandCountState, landCountState }}
    >
      {children}
    </GridContext.Provider>
  );
};
