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
    this.handleBeerSale = this.handleBeerSale.bind(this);
  }

  handleAddingNewTap(newTap) {
    let newMasterTapList = this.state.masterTapList.slice();
    newMasterTapList.push(newTap);
    this.setState({ masterTapList: newMasterTapList });
  }

  handleBeerSale(tapId) {
    let beerIds = this.state.masterTapList.map(beer => beer.id);
    let beerIndex = beerIds.indexOf(tapId);

    // splice
    let leftPart = this.state.masterTapList.splice(0, beerIndex);

    let beer = this.state.masterTapList.find(tap => tap.id === tapId);
    beer.numberOfPints--;

    let rightPart = this.state.masterTapList.splice(
      beerIndex,
      this.state.masterTapList.length
    );
    let array = [...leftPart, beer, ...rightPart];
    this.setState({ masterTapList: array });
  }

  render() {
    debugger;
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
        <TapList
          tapList={this.state.masterTapList}
          handleBeerSale={this.handleBeerSale}
        />
      </div>
    );
  }
}
