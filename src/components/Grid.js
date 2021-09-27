import { useGridContext } from "../utils/GridContext";
import { v4 as uuidv4 } from "uuid";
import sea from "../img/sea-draw2.jpg";

const styles = {
  sea: {
    backgroundImage: `url(${sea})`,
  },
  land: {
    background: "green",
  },
};

function Grid() {
  const { gridState, toggled } = useGridContext();
  return (
    <main>
      <table>
        <tbody>
          {gridState.map((rowCell, rowIndex) => {
            return (
              <tr key={uuidv4()}>
                {rowCell.map((columnCell, coloumnIndex) => {
                  return (
                    <td
                      key={uuidv4()}
                      onClick={() =>
                        toggled(columnCell, rowIndex, coloumnIndex)
                      }
                      style={columnCell ? styles.land : styles.sea}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default Grid;
