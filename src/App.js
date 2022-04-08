import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RouterComponent from "./Components/routers";
import HeaderComponent from "./Components/Header";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
function App() {
  return (
    <div>
      {/* <HeaderComponent /> */}
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route exact path="/" element={<Navigate to="/Home" />} />
          {/* <Route exact path="/Home" element={<Home />}>
            <Redirect to="/Home" />
          </Route> */}

          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
