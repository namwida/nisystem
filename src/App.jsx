import "./App.css";
import "./styles/common.css";
import "./styles/reset.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomeMain from "./Home/Main/Main";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
