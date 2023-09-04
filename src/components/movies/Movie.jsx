import React, { Component } from "react";
import "./Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { SET_FAVOURITE_MOVIE } from "../../store/types";

class Movie extends Component {
  onStarClick = () => {
    this.props.dispatch({
      type: SET_FAVOURITE_MOVIE,
      payload: this.props.movie.id,
    });
  };

  render() {
    const { title, original_language, release_date, poster_path, id } =
      this.props.movie;

    //calculate the colour of the star
    const color = this.props.favouriteMovies.includes(id)
      ? "#00ff00"
      : "#ff0000";

    return (
      <div className="movieContainer">
        <h1>{title}</h1>
        <p>Language: {original_language}</p>
        <p>Release Date: {new Date(release_date).toLocaleDateString()}</p>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
            alt={title}
          />
        </div>
        <div onClick={this.onStarClick}>
          <FontAwesomeIcon icon={faStar} style={{ color }} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { favouriteMovies: state.favouriteMovies };
}

export default connect(mapStateToProps)(Movie);
