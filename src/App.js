import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/topbar";
import Dashboard from "./scenes/dashboard";

function App() {
  return (
    <div className="app">
      <main className="content">
        {/* <Topbar /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
