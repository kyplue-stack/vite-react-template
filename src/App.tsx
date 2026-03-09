
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Running from "./pages/Running";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/running" element={<Running />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
