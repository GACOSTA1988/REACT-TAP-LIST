import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar.jsx";
import TapList from "./components/TapList.jsx";
import NewTap from "./components/NewTap.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import NoError from "./components/NoError";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: []
    };
    this.handleAddingNewTap = this.handleAddingNewTap.bind(this);
  }

  handleAddingNewTap(newTap) {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({ masterTapList: newMasterTapList });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={NoError} />
          <Route exact path="/navbar" component={NavBar} />
          <Route
            exact
            path="/newtapform"
            component={() => <NewTap onNewTap={this.handleAddingNewTap} />}
          />
          <Route component={Error404} />
        </Switch>
        <TapList tapList={this.state.masterTapList} />
      </div>
    );
  }
}
