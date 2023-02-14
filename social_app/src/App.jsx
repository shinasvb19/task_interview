import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Update from "./pages/Update";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/update" element={<Update />}></Route>
    </Routes>
  );
}

export default App;
