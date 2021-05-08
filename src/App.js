import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Components/Search";
import Card from "./Components/Card";

function App() {

  let apiKey = process.env.REACT_APP_API_KEY;

  let[movieID, setMovieID] = useState("157336");
  let [movieData, setMovieData] = useState({});

  let getMovieData = (url) => {
    axios.get(url).then((res) => {
      setMovieData({
        movieID: res.data.id,
        original_title: res.data.original_title,
        tagline: res.data.tagline,
        overview: res.data.overview,
        homepage: res.data.homepage,
        poster: res.data.poster_path,
        production: res.data.production_companies,
        genre: res.data.genres,
        release: res.data.release_date,
        vote: res.data.vote_average,
        runtime: res.data.runtime,
        revenue: res.data.revenue,
        backdrop: res.data.backdrop_path,
      });
    })
  }

  useEffect(() => {
    getMovieData(
      `https://api.themoviedb.org/3/movie/${movieID}?&api_key=${apiKey}`
    );
  }, [movieID])

  return (
    <div className="App">
      <div className="container w-75">
        <Search getMovieData={getMovieData} setMovieID={setMovieID} apiKey={apiKey}/>
        <Card movieData={movieData}/>
      </div>
    </div>
  );
}

export default App;
