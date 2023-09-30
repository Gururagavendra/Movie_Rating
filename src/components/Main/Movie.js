import React from "react";

const Movie = ({ newmovie }) => {
  return (
    <>
      <div className="container">
        <img
          src={
            newmovie.Poster !== "N/A"
              ? newmovie.Poster
              : "https://via.placeholder.com/400"
          }
          alt="imageofmovie"
        />
        <div className="values">
          <div className="Movie-type">
            <div className="typeyear">
              <p>{newmovie.Type}</p>
              <p>{newmovie.Year}</p>
            </div>
          </div>
          <h2 className="Movie-title">{newmovie.Title}</h2>
        </div>
      </div>
    </>
  );
};

export default Movie;
