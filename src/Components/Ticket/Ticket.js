import { useState } from "react";
import tambola from "tambola";
import "./ticket.css";

export const Ticket = () => {
  const [tickets] = useState(tambola.generateTicket());
  const [selectedCell, setSelectedCell] = useState({});

  const handleCellClick = (item) => {
    if (item !== 0) {
      setSelectedCell({ ...selectedCell, [item]: !!!selectedCell[item] });
    }
  };

  return (
    <div className="container">
      <table
        className="table"
        style={{ backgroundImage: `url('/table-bg.png')` }}
      >
        {tickets.map((ticket) => (
          <tr className="row">
            {ticket.map((item) => (
              <td
                className="cell"
                style={{
                  backgroundImage: selectedCell[item]
                    ? `url('select.png')`
                    : `url('unselect.png')`,
                }}
                onClick={() => handleCellClick(item)}
              >
                {item > 0 && item}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};
