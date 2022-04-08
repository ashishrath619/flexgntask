import { BrowserRouter, Route, Router } from "react-router-dom";
import HeaderComponent from "./Header";
import Home from "./Home";
export default function RouterComponent() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Router>
          <Route path="/" component={Home} />
          {/* <Route path="/Home" component={Home} /> */}
        </Router>
      </BrowserRouter>
    </>
  );
}
