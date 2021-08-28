import "./App.css";
import { useState } from "react";

import MovieList from "./Component/MovieList";
import { moviesData } from "./Data";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Add from "./Component/Modal/Modal";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [rating, setRating] = useState(1);
  const [search, setSearch] = useState("");
  const handleAdd = (name, date, type, description, img, rating) => {
    setMovies(
      movies.concat({
        id: Math.random(),
        image: img,
        description: description,
        name: name,
        rating: rating,
        date: date,
        type: type,
      })
    );
  };
  return (
    <div className="App">
      <Navbar setSearch={setSearch} setRating={setRating}></Navbar>
      <Add handleAdd={handleAdd}></Add>
      <MovieList movies={movies} search={search} rating={rating}></MovieList>
      <Footer></Footer>
    </div>
  );
}

export default App;
