import React from "react";
import "./Movie.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const MovieList = ({ movies, search, rating }) => {
  return (
    <div>
      {movies
        .filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))
        .filter((ele) => ele.rating >= rating)
        .map((ele) => (
          <div className="movie_card" id="bright" key={ele.id}>
            <div className="info_section">
              <div className="movie_header">
                <img className="locandina" src={ele.image} alt="" />
                <h1>{ele.name}</h1>
                <h4>{ele.date}</h4>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend"></Typography>
                  <Rating name="read-only" value={ele.rating} readOnly />
                </Box>
                <p className="type">{ele.type}</p>
              </div>
              <div className="movie_desc">
                <p className="text">{ele.description}</p>
              </div>
            </div>
            <div className="blur_back bright_back" />
          </div>
        ))}
    </div>
  );
};

export default MovieList;
