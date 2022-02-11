import React from "react";
import { directors } from "../data";

function Directors() {
  let directorsToDisplay = directors.map((director)=>{

    let moviesToDisplay = director.movies.map((movie)=>{
      return(<li>{movie}</li>)
    })
    return (
      <div>
        <h3>{director.name}</h3>
        <p>Movies:</p>
        <ul>{moviesToDisplay}</ul>
      </div>
    )
  })

  return <div>
    <h1>Director Page</h1>
    {directorsToDisplay}
    </div>;
}

export default Directors;
