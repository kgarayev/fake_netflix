import React, { Component } from "react";
import Nav from "./Nav";
import Index from "./movies";
import "./Interface.css";
import { connect } from "react-redux";
import Favourites from "./movies/Favourites";

class Interface extends Component {
  render() {
    return (
      <div className="appContainer">
        <header>
          <h1>Russ Flix</h1>
          <nav>
            <Nav />
          </nav>
        </header>
        <main>
          {this.props.screenMode === 0 && <Index />}
          {this.props.screenMode === 1 && <Favourites />}
        </main>
        <footer>Copyright 2023 Russ Flix</footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { screenMode: state.screenMode };
}

export default connect(mapStateToProps)(Interface);
