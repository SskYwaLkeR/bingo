import "./App.css";
import Ticket from "./Components/Ticket";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url('/background.png')` }}>
      <div className="wrapper">
        <h1 className="title">Bingo</h1>
        <Ticket />
      </div>
    </div>
  );
}

export default App;
