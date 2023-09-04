import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";

class Favourites extends Component {
  render() {
    let actualMovies = [];

    for (const object in this.props.movies) {
      this.props.movies[object].forEach((movie) => {
        //are you in the favs, if so place in the actual movies
        if (this.props.favouriteMovies.includes(movie.id)) {
          actualMovies.push(movie);
        }
      });
    }

    //stole from stackoverflow 3 mins before end of lesson
    actualMovies = actualMovies.filter(
      (value, index, self) =>
        index ===
        self.findIndex((t) => t.place === value.place && t.name === value.name)
    );

    return actualMovies.map((movie) => <Movie key={movie.id} movie={movie} />);
  }
}

function mapStateToProps(state) {
  return { movies: state.movies, favouriteMovies: state.favouriteMovies };
}

export default connect(mapStateToProps)(Favourites);
