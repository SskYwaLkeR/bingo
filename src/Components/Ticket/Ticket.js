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
      <table className="table">
        {tickets.map((ticket) => (
          <tr className="row">
            {ticket.map((item) => (
              <td
                className="cell"
                style={{
                  background: selectedCell[item] && "#1e9f09",
                  color: selectedCell[item] && "#ffffff",
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
