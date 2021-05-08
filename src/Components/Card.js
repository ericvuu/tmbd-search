import React, { useState, useEffect } from "react";
import "./Card.css"
import numeral from "numeral";

const Card = ({ movieData }) => {

  const nestedDataToString = (nestedData) => {
    let nestedArray = [],
      resultString;
    if (nestedData !== undefined) {
      nestedData.forEach((item) => {
        nestedArray.push(item.name);
      });
    }
    resultString = nestedArray.join(", "); // array to string
    return resultString;
  };

  let posterIMG = "https://image.tmdb.org/t/p/w500" + movieData.poster,
    production = movieData.production,
    productionCountries = movieData.production_countries,
    genres = movieData.genre,
    totalRevenue = movieData.revenue,
    productionList = nestedDataToString(production),
    noData = "-",
    genresList = nestedDataToString(genres),
    backdropIMG = "https://image.tmdb.org/t/p/original" + movieData.backdrop;

  useEffect(() => {
    document.body.style.backgroundImage = "url(" + backdropIMG + ")";
  }, [backdropIMG]);

  if (movieData.vote === "undefined" || movieData.vote === 0) {
    movieData.vote = noData;
  } else {
    movieData.vote = movieData.vote;
  };

  if (totalRevenue === "undefined" || totalRevenue === 0) {
    totalRevenue = noData;
  } else {
    totalRevenue = numeral(movieData.revenue).format("($0,0)");
  };

  if (movieData.poster == null) {
    posterIMG =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
  }
  return (
    <div className="col-12 card-container d-flex">
      <div className="poster-container col-5">
        <img id="postertest" className="poster" src={posterIMG} />
      </div>
      <div className="meta-data-container col-7">
        <h1>{movieData.original_title}</h1>

        <span className="tagline">{movieData.tagline}</span>
        <p>{movieData.overview}</p>
        <div className="additional-details">
          <span className="genre-list">{genresList}</span>
          <span className="production-list">{productionList}</span>
          <div className="row release-details">
            <div className="col-6">
              Original Release:
              <span className="meta-data">{movieData.release}</span>
            </div>
            <div className="col-6">
              Running Time:
              <span className="meta-data">{movieData.runtime} mins</span>{" "}
            </div>
            <div className="col-6">
              Box Office: <span className="meta-data">{totalRevenue}</span>
            </div>
            <div className="col-6">
              Vote Average: <span className="meta-data">{movieData.vote}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
