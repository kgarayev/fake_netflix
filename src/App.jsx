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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDljOWY5NGU3ODVhZjZmZjAyNGU1ZmIwMDk4ZWNiZCIsInN1YiI6IjY0ZjY1ZTc1YjIzNGI5MDEzYTRhNmJhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iaUEjaSLtyN02HQ3ZCE8zH8qkj4maY4_fZKnh2n0nUM`,
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
