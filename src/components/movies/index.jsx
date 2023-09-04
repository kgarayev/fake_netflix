import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";

class Index extends Component {
  render() {
    if (!this.props.movies) return null; //temp hack

    return this.props.movies[this.props.lastClickedId].map((movie) => {
      return <Movie key={movie.id} movie={movie} />;
    });
  }
}

function mapStateToProps(state) {
  return { movies: state.movies, lastClickedId: state.lastClickedId };
}

export default connect(mapStateToProps)(Index);
