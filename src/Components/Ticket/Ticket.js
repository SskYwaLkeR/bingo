import { useState } from "react";
import tambola from "tambola";
import "./ticket.css";

export const Ticket = () => {
  const [tickets, setTicket] = useState(tambola.generateTicket());
  const [selectedCell, setSelectedCell] = useState({});

  const handleCellClick = (item) => {
    if (item !== 0) {
      setSelectedCell({ ...selectedCell, [item]: !!!selectedCell[item] });
    }
  };

  return (
    <div className="container">
      <table className="table">
        {tickets.map((ticket) => (
          <tr className="row">
            {ticket.map((item) => (
              <td
                className="cell"
                style={{
                  background: selectedCell[item] && "#ff42c6",
                  color: selectedCell[item] && "#fff",
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
