import React, {useState, useEffect} from 'react'

const Card = ({movieData}) => {

  const nestedDataToString = (nestedData) => {
      let nestedArray = [],
        resultString;
      if (nestedData !== undefined) {
        nestedData.forEach(function (item) {
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
    productionCountriesList = nestedDataToString(productionCountries),
    noData = "-",
    genresList = nestedDataToString(genres),
    backdropIMG = "https://image.tmdb.org/t/p/original" + movieData.backdrop;

  return (
    <div className="col-xs-12 cardcont nopadding">
      <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
        <h1>{movieData.original_title}</h1>

        <span className="tagline">{movieData.tagline}</span>
        <p>{movieData.overview}</p>
        <div className="additional-details">
          <span className="genre-list">{genresList}</span>
          <span className="production-list">{productionList}</span>
          <div className="row nopadding release-details">
            <div className="col-xs-6">
              Original Release:
              <span className="meta-data">{movieData.release}</span>
            </div>
            <div className="col-xs-6">
              Running Time:
              <span className="meta-data">{movieData.runtime} mins</span>{" "}
            </div>
            <div className="col-xs-6">
              Box Office: <span className="meta-data">{totalRevenue}</span>
            </div>
            <div className="col-xs-6">
              Vote Average: <span className="meta-data">{movieData.vote}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
        <img id="postertest" className="poster" src={posterIMG} />
      </div>
    </div>
  );
};;

export default Card;
