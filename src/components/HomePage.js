import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MovieItem from "./Movies/MovieItem";
import { getAllMovies } from "../api.helpers/api-helpers";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"40vh"} padding={2}>
        <img src="" alt="Brahmastra" width={"100%"} height={"100%"} />
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <Box display="flex" width="80%" justifyContent={"center"} flexWrap="wrap">
        {movies &&
          movies
            .slice(0, 4)
            .map((movie, index) => (
              <MovieItem
                id={movie.id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                releaseDate={movie.releaseDate}
                key={index}
              />
            ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="Outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        ></Button>
        VIEW ALL MOVIES
      </Box>
    </Box>
  );
};

export default HomePage;
