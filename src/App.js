import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar.jsx";
import TapList from "./components/TapList.jsx";
import NewTapForm from "./components/NewTapForm.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "./components/Error404";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: []
    };
    this.handleAddingNewTap = this.handleAddingNewTap.bind(this);
  }

  handleAddingNewTap(newTap) {
    this.setState({
      masterTapList: [...this.state.masterTapList, newTap]
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/navbar" component={NavBar} />
          <Route
            onNewTapCreation={this.handleAddingNewTap}
            exact
            path="/newtapform"
            component={NewTapForm}
          />
          <Route component={Error404} />
        </Switch>
        <TapList ticketList={this.state.masterTapList} />
      </div>
    );
  }
}
