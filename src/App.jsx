import Aside from "./components/Aside";
import "./App.css";
import Player from "./logic/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Woodcutting from "./pages/Woodcutting";
import Fishing from "./pages/Fishing";
import Header from "./components/Header";
import Firemaking from "./pages/Firemaking";
function App() {
  const player = new Player("nahsev");

  return (
    <>
      <BrowserRouter>
        <Aside player={player} />
        <Header />
        <Routes>
          <Route path="/" element={<Woodcutting player={player} />} />
          <Route
            path="/woodcutting"
            element={<Woodcutting player={player} />}
          />
          <Route path="/fishing" element={<Fishing />} />
          <Route path="/firemaking" element={<Firemaking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
