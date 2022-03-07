import React, { useState, useEffect } from "react";

// Axios allows us to communicate with the APIs in your React project.

import axios from "axios";

/* Create a functional component as we imported useState and useEffect methods */

const MoviesTable = () => {
  /* The first element is the initial state and the second one is a function that is used for updating the state.*/

  // Initially our movie array is empty.

  // setMovie method is used to update the movie array.

  const [movie, setMovie] = useState([]);

  //  In useEffect method, we uses the axios to get all the movies from the database to the user interface.

  useEffect(() => {
    axios
      /* Axios performs a get request to the end point and it returns a promise. It stores our data in result.data*/
      .get("http://localhost:3001/getmovies")
      /* Set the above result.data to the movie array using setMovie function. movie array get automatically updated with tha movies that are present at the specific end point. */
      .then((result) => setMovie(result.data))
      /* If any error occurs in the above process, we can log the error on the console */
      .catch((error) => console.log(error));
  });

  // The functional component returns a user interface
  return (
    /* Wrapped the user interface inside a div and used the bootsrap className container */
    <div className="container">
      {/* This line displays the number of movies present in the database */}
      There are {movie.length} movies in the db
      {/* Used a table to display the title, Year, Cast and Genre of the movie. The bootstrap clssName used here is "table table-striped" */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Cast</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {/* map each element of the movie array to each row in the table. */}
          {movie.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              {/* To join the string, used , to make seperation between each name */}
              <td>{movie.cast.join(", ")}</td>
              <td>{movie.genres.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export the table to the root file
export default MoviesTable;
