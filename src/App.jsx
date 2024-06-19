import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FullStack from "./FullStack";
import Data_Science from "./Data_Science";
import Cyber_Security from "./Cyber_Security";
import Career from "./Career";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Full-Stack" element={<FullStack />}></Route>
          <Route path="/Data_Science" element={<Data_Science />}></Route>
          <Route path="/Cyber_Security" element={<Cyber_Security />}></Route>
          <Route path="/career" element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;