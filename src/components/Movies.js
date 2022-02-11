import React from "react";
import { movies } from "../data";

function Movies() {
  let moviesToDisplay = movies.map((movie)=>{

    let genresToDisplay = movie.genres.map((genre)=>{
      return(<li>{genre}</li>)
    })

    return (
      <div>
        <h3>{movie.title}</h3>
        <p>Time: {movie.time} </p>
        <p>Genre:</p>
        <ul>{genresToDisplay}</ul>
      </div>
    )
  })

  return <div>
    <h1>Movie Page</h1>
    {moviesToDisplay}
    </div>;
}

export default Movies;
