import React from "react";
import { actors } from "../data";

function Actors() {
  let actorsToDisplay = actors.map((actor)=>{

    let moviesToDisplay = actor.movies.map((movie)=>{
      return(<li>{movie}</li>)
    })

    return (
      <div>
        <h3>{actor.name}</h3>
        <p>Movies:</p>
        <ul>{moviesToDisplay}</ul>
      </div>
    )
  })

  return <div>
    <h1>Director Page</h1>
    {actorsToDisplay}
    </div>;
}

export default Actors;
