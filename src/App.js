import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
