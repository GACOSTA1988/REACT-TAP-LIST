import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar.jsx";
import TapList from "./components/TapList.jsx";
import NewTapForm from "./components/NewTapForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <Header />
      <NewTapForm />
      <Switch>
        <Route exact path="/navbar" component={NavBar} />
        <Route component={Error404} />
      </Switch>
      <TapList />
    </div>
  );
}

export default App;
