import React from "react";
import { Route, NavLink } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Sign Up</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/jokes">Jokes</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/login">Sign In</NavLink>
      </nav>
      <section>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/jokes" component={Jokes} />
      </section>
    </div>
  );
}

export default App;
