import React from "react";
import { MovieDetails } from "../interfaces/movieDetails";

interface InfoMoviesProps {
  detailMovieData: MovieDetails;
  baseUrl: string;
}

const InfoMovies = ({ detailMovieData, baseUrl }: InfoMoviesProps) => {
  console.log(detailMovieData, baseUrl);
  return <div>info</div>;
};

export default InfoMovies;
