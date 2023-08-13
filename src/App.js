import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./pages/Setting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Setting />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
