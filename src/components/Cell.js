import { useGridContext } from "../utils/GridContext";
import sea from "../img/sea-draw2.jpg";
import land from "../img/land.JPG";

function Cell({ columnCell, rowIndex, coloumnIndex }) {
  const { gridState, toggled } = useGridContext();
  //   console.log(columnCell);

//   console.log('rowIndex', rowIndex, 'coloumnIndex', coloumnIndex);

  return (
    <>
      {columnCell ? (
        <img
          src={land}
          alt="pic"
          onClick={() => toggled(columnCell, rowIndex, coloumnIndex)}
        />
      ) : (
        <img
          src={sea}
          alt="pic"
          onClick={() => toggled(columnCell, rowIndex, coloumnIndex)}
        />
      )}
    </>
  );
}

export default Cell;
