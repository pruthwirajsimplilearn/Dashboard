import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </Router>
  );
}

export default App;
