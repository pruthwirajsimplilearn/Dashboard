import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import { NavBar } from "./components/NavBar";
import Register from "./components/Register";
import "font-awesome/css/font-awesome.min.css"

function App() {
  return (
    <Router>
      <NavBar/>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/home" exact>
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
