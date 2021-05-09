import React, {useState} from 'react'
import tmdb from '../Assets/tmdb.svg'
import axios from "axios";
import './Search.css'

const Search = ({getMovieData, setMovieID, apiKey}) => {

  const [searchTerm, setSearchTerm] = useState("");

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=`;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      axios.get(SEARCH_API + searchTerm).then((res) => {
        setMovieID(res.data.results[0].id)
      })
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="col-xs-12 search-container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-lg-5">
          <a href="./" title="ReactJS TMDb Movie Search">
            <img src={tmdb} className="logo" alt="The Movie Database" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-7">
          <form className="searchbox" onSubmit={handleSubmit}>
            <input
              className="searchbox__input typeahead form-control"
              type="text"
              placeholder="Search Movie Title..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search
