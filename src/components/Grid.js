import { useMemo } from "react";

import sea from "../img/sea.jpg";

function Grid() {
  const row = [0, 0, 0];

  const toggle = () => {
    console.log("p");
  };

  return (
    <table>
      <tbody>
        {row.map((item) => {
          return (
            <tr>
              {row.map((item) => {
                return (
                  <td onClick={toggle}>
                    <img src={sea} alt="pic" />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Grid;
