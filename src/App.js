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

export default class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: []
    };
    this.handleAddingNewTap = this.handleAddingNewTap.bind(this);
  }

  handleAddingNewTap(newTap) {
    this.setState({
      masterTapList: [...this.state.masterTicketList, newTap]
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/navbar" component={NavBar} />
          <Route exact path="/newtapform" component={NewTapForm} />
          <Route component={Error404} />
        </Switch>
        <TapList />
      </div>
    );
  }
}
