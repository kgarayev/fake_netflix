import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { SET_GENRES } from "./store/types";
import Interface from "./components/Interface";

class App extends Component {
  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGQ2YjFmOGE4ZmM2ZGJmOGU0YWY0M2U3MzBhNDY2MSIsInN1YiI6IjY0Nzc4OGJhOTM4MjhlMDBiZjljOTkwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5PaH_RToi9pI0GJ_K_BtR3PlwJiScoFClmEfUqXuUzo`,
        },
      }
    );
    this.props.dispatch({ type: SET_GENRES, payload: data.genres });
  }

  render() {
    //loading while waiting for data
    if (!this.props.genres) return <h1>Loading....</h1>;

    return (
      <>
        <Interface />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { genres: state.genres };
}

export default connect(mapStateToProps)(App);
