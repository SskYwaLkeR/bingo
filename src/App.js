import "./App.css";
import Ticket from "./Components/Ticket";

function App() {
  return (
    <div className="root" style={{ backgroundImage: `url('/bg.png')` }}>
      <img className="prizes" src="/top-header.png" alt="" />
      <div className="App">
        <div className="wrapper">
          <img className="prizes" src="/tambola.png" alt="" />
          <Ticket />
          <img className="prizes" src="/option-tray.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
